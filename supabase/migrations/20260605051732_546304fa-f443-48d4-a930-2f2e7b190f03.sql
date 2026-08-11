CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "auth read profiles" ON public.profiles;
CREATE POLICY "auth read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "auth read roles" ON public.user_roles;
CREATE POLICY "users read own role" ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins manage roles" ON public.user_roles FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "auth manage employees" ON public.employees;
CREATE POLICY "auth read employees" ON public.employees FOR SELECT TO authenticated USING (true);
CREATE POLICY "managers insert employees" ON public.employees FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role));
CREATE POLICY "managers update employees" ON public.employees FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role));
CREATE POLICY "admins delete employees" ON public.employees FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role));

DROP POLICY IF EXISTS "auth manage assets" ON public.assets;
CREATE POLICY "auth read assets" ON public.assets FOR SELECT TO authenticated USING (true);
CREATE POLICY "managers insert assets" ON public.assets FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role));
CREATE POLICY "managers update assets" ON public.assets FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role));
CREATE POLICY "admins delete assets" ON public.assets FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role));

DROP POLICY IF EXISTS "auth manage assignments" ON public.asset_assignments;
CREATE POLICY "auth read assignments" ON public.asset_assignments FOR SELECT TO authenticated USING (true);
CREATE POLICY "managers insert assignments" ON public.asset_assignments FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role));
CREATE POLICY "managers update assignments" ON public.asset_assignments FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(),'admin'::public.app_role) OR public.has_role(auth.uid(),'manager'::public.app_role));
CREATE POLICY "admins delete assignments" ON public.asset_assignments FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role));

DROP POLICY IF EXISTS "auth manage docs" ON public.asset_documents;
CREATE POLICY "auth read docs" ON public.asset_documents FOR SELECT TO authenticated USING (true);
CREATE POLICY "auth insert docs" ON public.asset_documents FOR INSERT TO authenticated
  WITH CHECK (uploaded_by = auth.uid());
CREATE POLICY "owner or admin update docs" ON public.asset_documents FOR UPDATE TO authenticated
  USING (uploaded_by = auth.uid() OR public.has_role(auth.uid(),'admin'::public.app_role))
  WITH CHECK (uploaded_by = auth.uid() OR public.has_role(auth.uid(),'admin'::public.app_role));
CREATE POLICY "owner or admin delete docs" ON public.asset_documents FOR DELETE TO authenticated
  USING (uploaded_by = auth.uid() OR public.has_role(auth.uid(),'admin'::public.app_role));

DROP POLICY IF EXISTS "auth read audit" ON public.audit_log;
CREATE POLICY "admins read audit" ON public.audit_log FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(),'admin'::public.app_role));

DROP POLICY IF EXISTS "auth update asset files" ON storage.objects;
DROP POLICY IF EXISTS "auth delete asset files" ON storage.objects;
DROP POLICY IF EXISTS "auth upload asset files" ON storage.objects;
CREATE POLICY "auth upload asset files" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'asset-files' AND owner = auth.uid());
CREATE POLICY "owner or admin update asset files" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'asset-files' AND (owner = auth.uid() OR public.has_role(auth.uid(),'admin'::public.app_role)))
  WITH CHECK (bucket_id = 'asset-files' AND (owner = auth.uid() OR public.has_role(auth.uid(),'admin'::public.app_role)));
CREATE POLICY "owner or admin delete asset files" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'asset-files' AND (owner = auth.uid() OR public.has_role(auth.uid(),'admin'::public.app_role)));
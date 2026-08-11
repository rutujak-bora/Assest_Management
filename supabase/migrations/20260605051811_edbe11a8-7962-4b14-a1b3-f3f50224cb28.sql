INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::public.app_role FROM auth.users
WHERE email IN ('shahid@bora.tech','pravin@bora.tech')
ON CONFLICT (user_id, role) DO NOTHING;
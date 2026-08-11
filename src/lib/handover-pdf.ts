import { jsPDF } from "jspdf";
import { getCategoryLabel, type AssetCategory } from "./categories";

export interface HandoverData {
  companyName?: string;
  date: string;
  employee: {
    name: string;
    code: string;
    department?: string | null;
    designation?: string | null;
    location?: string | null;
  };
  asset: {
    category: AssetCategory;
    product_name: string;
    brand?: string | null;
    series?: string | null;
    serial_number?: string | null;
    asset_tag: string;
    purchase_date?: string | null;
    warranty_end?: string | null;
    configuration?: string | null;
    purchase_price?: string | number | null;
    vendor_name?: string | null;
    invoice_number?: string | null;
    company?: string | null;
  };
  accessories?: string;
  approved_by?: string;
  additional_attachments?: string;
}

export function generateHandoverPDF(data: HandoverData): { blob: Blob; fileName: string } {
  // Standard A4: 595.28 pt x 841.89 pt
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const M = 48; // Left/Right margin
  const contentW = W - M * 2;

  const catLabel = getCategoryLabel(data.asset.category);
  const catLower = catLabel.toLowerCase();
  
  // Format device model string
  const modelParts = [
    data.asset.brand,
    data.asset.product_name,
    data.asset.series,
    data.asset.configuration,
  ].filter(Boolean);
  const deviceModelStr = modelParts.length ? modelParts.join(", ") : `${catLabel} Device`;

  /* ==========================================================================
     PAGE 1: LETTERHEAD, ISSUANCE LETTER & TERMS & CONDITIONS
     ========================================================================== */
  let y = 45;

  // ── Logo Header (Centered) ──
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 150, 214); // Cyan/Blue Bora color
  doc.text("BORA", W / 2, y, { align: "center" });

  y += 14;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 115, 175);
  doc.text("MULTICORP", W / 2, y, { align: "center" });

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(120, 130, 140);
  doc.text("Expanding horizons", W / 2, y, { align: "center" });

  // ── Date (Right Aligned) ──
  y += 15;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(30, 30, 30);
  doc.text(`Date: ${data.date}`, W - M, y, { align: "right" });

  // ── Subject (Centered) ──
  y += 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(20, 20, 20);
  doc.text(`Subject: Issuance of ${catLabel} for Official Use`, W / 2, y, { align: "center" });

  // ── Dear Employee ──
  y += 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`Dear: ${data.employee.name}`, M, y);

  // ── Opening Paragraph ──
  y += 20;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(35, 35, 35);
  const openingText = `We are pleased to inform you that a company-issued ${catLower} is being provided to you for the purpose of enhancing your work efficiency and ensuring smooth operations. Please find the details of the issued device below:`;
  const openLines = doc.splitTextToSize(openingText, contentW);
  doc.text(openLines, M, y);
  y += openLines.length * 13 + 12;

  // ── Bullets (Device Details) ──
  const bullets = [
    { label: `${catLabel} Model:`, val: deviceModelStr },
    { label: "Serial Number:", val: data.asset.serial_number ?? "—" },
    { label: "Accessories Provided:", val: data.accessories ?? "Charger & Mouse" },
  ];

  bullets.forEach((b) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 30, 30);
    doc.text("✓", M + 20, y);

    doc.text(`  ${b.label}`, M + 30, y);
    const labelW = doc.getTextWidth(`  ${b.label} `);
    
    doc.setFont("helvetica", "bold");
    const valLines = doc.splitTextToSize(b.val, contentW - 50 - labelW);
    doc.text(valLines, M + 30 + labelW, y);

    y += Math.max(16, valLines.length * 13);
  });

  // ── Terms and Conditions Heading ──
  y += 15;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("Terms and Conditions:", M, y);
  y += 18;

  // ── 7 Terms Points ──
  const termsList = [
    {
      title: "1. Purpose of Use:",
      text: `The ${catLower} is provided solely for official purposes. Personal use should be minimal and should not interfere with your work responsibilities or violate company policies.`,
      boldSegments: [],
    },
    {
      title: "2. Data Confidentiality:",
      text: `You are responsible for maintaining the confidentiality of all company data stored on the ${catLower}. Sharing sensitive or proprietary information without prior authorization is strictly prohibited.`,
      boldText: "Sharing sensitive or proprietary information without prior authorization is strictly prohibited.",
    },
    {
      title: "3. Care and Maintenance:",
      text: `The ${catLower} should be handled with care. Any damage or malfunction must be reported immediately to the IT department. You are also responsible for regular maintenance (e.g., system updates).`,
      boldSegments: [],
    },
    {
      title: "4. Loss or Damage:",
      text: `In case of theft, loss, or damage caused by negligence or misuse, the employee may be held responsible for the cost of repairs or replacement of the device. The company reserves the right to deduct the cost from your salary, subject to company policy.`,
      boldSegments: ["theft, loss, or damage caused by negligence or misuse", "deduct the cost from your salary"],
    },
    {
      title: "5. Return of Equipment:",
      text: `Upon resignation, termination, or upon request from the company, the ${catLower} must be returned along with all accessories provided to Reporting Manager or IT Department. If you fail Reporting Manager is fully responsible for any damage or loss of the equipment.`,
      boldSegments: ["Upon resignation, termination", "Reporting Manager or IT Department", "Reporting Manager is fully responsible for any damage or loss of the equipment."],
    },
    {
      title: "6. Software Installation:",
      text: `The installation of unauthorized or unlicensed software on the ${catLower} is strictly prohibited. All software installations must be approved by the IT department.`,
      boldSegments: [],
    },
    {
      title: "7. Compliance:",
      text: `You agree to comply with all company policies and IT security protocols concerning the use of company-issued equipment.`,
      boldSegments: [],
    },
  ];

  termsList.forEach((t) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(30, 30, 30);
    
    // Title Line
    doc.text(t.title, M, y);
    y += 12;

    // Body Text
    const lines = doc.splitTextToSize(`   ${t.text}`, contentW);
    lines.forEach((line: string) => {
      // Check if line contains bold segment
      let isBoldLine = false;
      if (t.boldText && line.includes(t.boldText)) {
        isBoldLine = true;
      }
      if (t.boldSegments?.some((seg) => line.includes(seg))) {
        isBoldLine = true;
      }

      doc.setFont("helvetica", isBoldLine ? "bold" : "normal");
      doc.text(line, M, y);
      y += 11;
    });

    y += 4;
  });

  /* ==========================================================================
     PAGE 2: ACKNOWLEDGMENT & IT DEPARTMENT INFORMATION
     ========================================================================== */
  doc.addPage();
  let y2 = 45;

  // ── Top Acknowledgment Paragraphs ──
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(35, 35, 35);
  doc.text("By signing this letter, you acknowledge receipt of the Device and agree to follow the terms and conditions set forth.", M, y2);

  y2 += 30;
  doc.text("Please sign and return a copy of this letter for our records.", M, y2);

  // ── Horizontal Line ──
  y2 += 15;
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.8);
  doc.line(M, y2, W - M, y2);

  // ── Employee Acknowledgment Heading ──
  y2 += 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("Employee Acknowledgment:", M, y2);

  // ── Acknowledgment Statement ──
  y2 += 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  const empAckStatement = `I, ${data.employee.name} have received the above-mentioned ${catLower} and agree to the terms and conditions stated in this letter.`;
  const ackLines = doc.splitTextToSize(empAckStatement, contentW);
  doc.text(ackLines, M, y2);

  y2 += ackLines.length * 13 + 25;
  doc.setFontSize(9.5);
  doc.text("Employee Signature: _______________________", M, y2);

  y2 += 20;
  doc.text("Date: _______________________", M, y2);

  // ── Dotted Separator Line ──
  y2 += 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  const dots = "*".repeat(110);
  doc.text(dots, M, y2);

  // ── IT Department Information Heading ──
  y2 += 25;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(20, 20, 20);
  doc.text("For IT Department Information:", M, y2);
  y2 += 18;

  // ── Technical Checkmark List ──
  const priceDisplay = data.asset.purchase_price ? `${data.asset.purchase_price}+GST` : "—";
  const vendorDisplay = data.asset.vendor_name || "Office Stock (Warehouse)";
  const approvedByDisplay = data.approved_by || "rkn sir";

  const itDetails = [
    { label: "Brand Name:", val: data.asset.brand ?? "DELL" },
    { label: "Device Model:", val: deviceModelStr },
    { label: "Serial Number/Service Tag:", val: data.asset.serial_number ?? "—" },
    { label: "Accessories Provided:", val: data.accessories ?? "Charger" },
    { label: "Exact Cost of Device:", val: priceDisplay },
    { label: "Additional Attachments:", val: data.additional_attachments ?? "-NO" },
    { label: "Purchase Date:", val: data.asset.purchase_date ?? data.date },
    { label: "Company In Purchase:", val: data.asset.company ?? data.companyName ?? "Bora Multicorp" },
    { label: "Warranty Expire Date:", val: data.asset.warranty_end ?? "—" },
    { label: "Department:", val: data.employee.department ?? "ERP" },
    { label: "Office/Location:", val: data.employee.location ?? "H.O" },
    { label: "Approved by:", val: approvedByDisplay },
    { label: "Purchase from:", val: vendorDisplay },
  ];

  itDetails.forEach((item) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(30, 30, 30);
    doc.text("✓", M + 20, y2);

    doc.text(`  ${item.label}`, M + 30, y2);
    const lblW = doc.getTextWidth(`  ${item.label} `);

    doc.setFont("helvetica", "bold");
    const vLines = doc.splitTextToSize(item.val, contentW - 50 - lblW);
    doc.text(vLines, M + 30 + lblW, y2);

    y2 += Math.max(15, vLines.length * 12);
  });

  // ── Bottom Dual Signatures ──
  y2 += 30;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(20, 20, 20);
  doc.text("Signature of Manager:", M, y2);
  doc.text("Signature of IT Department", W - M - 150, y2);

  const safeName = data.employee.name.replace(/[^a-z0-9]+/gi, "_");
  const fileName = `${catLabel}_Issuance_${safeName}.pdf`;
  return { blob: doc.output("blob"), fileName };
}

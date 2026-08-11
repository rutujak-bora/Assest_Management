# Asset Central Hub

Prompt for Developing an Enterprise IT Asset & Inventory Management System
Project Title

Corporate IT Asset Management & Inventory Tracking System

Project Overview

Develop a secure web-based IT Asset Management System for corporate internal use. The system will help the IT department manage, track, assign, and monitor company assets such as laptops, desktops, printers, monitors, keyboards, mice, racks, servers, switches, access points, N-Computing devices, and other IT equipment.

The current process is managed through Excel sheets. The objective is to digitize the complete asset lifecycle and provide centralized asset management with user-wise allocation tracking.

Module 1: Login & Authentication
Login Page

Create a secure login page with hardcoded credentials for initial deployment.

Authorized Users
Email	Password
shahid@bora.tech	shahid@123
pravin@bora.tech	pravin@123
Features
Email & Password Login
Remember Login Session
Logout Functionality
Session Timeout Protection
Dashboard Redirection After Login
Module 2: Dashboard

After successful login, users should be redirected to the Dashboard.

Dashboard Statistics Cards

Display:

Total Assets
Assigned Assets
Available Assets
Assets Under Repair
Assets Returned
Expired Warranty Assets
Assets Purchased This Month
Dashboard Charts
Category-wise Asset Distribution
Asset Status Overview
Monthly Purchase Report
User-wise Asset Allocation
Module 3: Asset Categories

Create a left-side navigation menu containing:

Categories
Laptop
Desktop
Server Desktop
Monitor
Keyboard
Mouse
Printer
Rack
Switch
Access Point
N-Computing
Server
CCTV
Storage Device
UPS
Other Assets

Each category should have:

View Assets
Add Asset
Import Excel
Export Excel
Search Asset
Module 4: Asset Entry Form
Add New Asset

Every asset should contain the following fields:

Field Name
Asset Type
Product Type
Product Name
User Name
From Date
To Date
Location
Purchase From
Price
Company
Series
Serial Number
Asset Tag ID
Purchase Date
Warranty Start Date
Warranty End Date
Invoice Number
Vendor Name
Configuration
Status
Remarks
Asset Status Options
Available
Assigned
In Repair
Lost
Damaged
Returned
Disposed
Module 5: Bulk Excel Upload
Import Asset Data

Allow importing assets through Excel.

Supported formats:

XLS
XLSX
CSV
Features
Download Sample Excel Format
Validate Excel Data
Preview Before Import
Error Report Generation
Duplicate Asset Detection
Module 6: Asset Assignment Management
Assign Asset to Employee

IT Team can assign assets to employees.

Assignment Details
Employee Name
Employee ID
Department
Designation
Email
Mobile Number
Asset Assigned
Assign Date
Expected Return Date
Remarks
Actions
Assign Asset
Return Asset
Transfer Asset
Replace Asset
Module 7: Asset History Tracking

Maintain complete history.

Track:

Purchase History
Assignment History
Return History
Repair History
Location Change History
Ownership Change History

Every action should be logged automatically.

Module 8: Asset Search & Filter

Advanced Search Filters:

Asset Type
Product Name
Serial Number
Employee Name
Company
Vendor
Location
Status
Purchase Date
Warranty Expiry
Module 9: Asset Details Page

Each asset should have a detailed profile page displaying:

Basic Information
Product Information
Purchase Information
Current Status
Current User
Asset Timeline
Purchase Date
Assignment History
Repairs
Returns
Transfers
Module 10: Repair & Maintenance Module

Track repair activities.

Fields:

Asset Name
Serial Number
Issue Description
Vendor Name
Repair Cost
Repair Date
Completion Date
Status

Status:

Under Repair
Repaired
Replacement Required
Module 11: Warranty Management

Automatically monitor warranty periods.

Features:

Warranty Expiry Alerts
Dashboard Notifications
Monthly Warranty Report
Vendor Contact Information
Module 12: Reports & Analytics

Generate reports:

Asset Reports
Category Wise Report
User Wise Report
Location Wise Report
Purchase Report
Warranty Report
Repair Report
Disposal Report
Export Options
Excel
PDF
CSV
Module 13: Notification System

System Notifications:

Asset Assigned
Asset Returned
Warranty Expiry
Repair Completion
Low Inventory Alert
Module 14: Audit Log

Maintain complete audit logs.

Track:

User Login
Asset Creation
Asset Update
Asset Assignment
Asset Return
Asset Deletion
Database Structure
Assets Table
asset_id
asset_type
product_type
product_name
serial_number
asset_tag
company
purchase_from
purchase_price
purchase_date
location
status
warranty_start
warranty_end
remarks
created_at
updated_at
Employees Table
employee_id
employee_name
department
designation
email
mobile
location
Asset Assignment Table
assignment_id
asset_id
employee_id
assign_date
return_date
status
remarks
Asset Repair Table
repair_id
asset_id
issue
vendor
repair_cost
repair_date
completion_date
status
Technology Stack
Frontend
React.js
Tailwind CSS
Material UI
Responsive Design
Backend
Node.js
Express.js
Database
MySQL
Additional Features
JWT Authentication
Excel Import/Export
PDF Report Generation
Role-Based Access
Audit Logging
Backup & Restore
Future Enhancements
QR Code Based Asset Tracking
Barcode Scanner Integration
Mobile Application
RFID Tracking
Multi-Branch Asset Management
Vendor Management
AMC Management
Employee Self-Service Portal

Additional Feature 1: Document Attachment

Every asset entry should allow multiple document uploads.

Upload Documents

 Purchase Invoice

 Warranty Card

 Vendor Quotation

 Purchase Order (PO)

 Delivery Challan

 Asset Images

 Employee Acknowledgement Documents

 Repair Documents

 AMC Documents

 Other Supporting Documents

Supported Formats

 PDF

 DOCX

 XLSX

 JPG

 PNG

Additional Feature 2: Auto-Generated Asset Handover Document

When the IT team assigns an asset to an employee, the system should automatically generate a PDF document similar to the attached format.

Auto Generated Document Workflow

Step 1

IT Team Assigns Asset

Example:

 Employee Name: Abhijeet Kamble

 Department: Otek

 Asset Type: Laptop

 Brand: Dell

 Model: Dell 15 i5 13th Gen

 Serial Number: 78087G4

 Accessories: Charger, Mouse

 Purchase Date

 Warranty Date

 Location

Step 2

System Automatically Creates PDF

Document Name:

Laptop_Issuance_Abhijeet_Kamble.pdf

Step 3

Document Contains

Company Header

 Company Logo

 Company Name

 Date

Employee Details

 Employee Name

 Employee ID

 Department

 Designation

 Location

Asset Details

 Asset Type

 Brand

 Model

 Serial Number

 Asset Tag Number

 Accessories Provided

 Purchase Date

 Warranty Expiry

Terms & Conditions

The system should store standard terms and conditions and automatically insert them into the generated document. Similar to the attached document.

Employee Acknowledgement Section

I acknowledge receipt of the above asset and agree to comply
with all company policies regarding its usage.

Signatures

 Employee Signature

 IT Team Signature

 Manager Signature

Digital Signature Feature

Optional Advanced Feature

Allow:

 Employee Digital Signature

 IT Team Digital Signature

 Manager Approval Signature

Generated PDF automatically stores signatures.

Asset Entry Additional Fields

Add these fields:

FieldPurposeAsset Tag IDUnique Asset NumberEmployee NameAssigned UserEmployee IDEmployee ReferenceDepartmentDepartment NameHandover DocumentAuto Generated PDFUploaded DocumentsInvoice, Warranty etc.Employee SignatureDigital SignatureManager ApprovalApproval StatusHandover DateAssignment DateReturn DateAsset Return Date

New Module: Document Management

Features

Generated Documents

 Asset Issuance Letter

 Asset Return Letter

 Asset Transfer Letter

 Repair Approval Letter

 Asset Disposal Letter

Actions

 View PDF

 Download PDF

 Email PDF

 Print PDF

 Regenerate PDF

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://inventree-guardian.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6a9f0cd2-3656-4314-9619-ac61e290aec2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

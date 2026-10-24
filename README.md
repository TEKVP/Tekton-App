# TEKTON Elevators - Site Lead & Operations Mobile Web Application

A free, standalone, mobile-first Web Application built for **TEKTON Elevators** field engineers, sales team, and operations personnel.

---

## 🌟 Key Features
1. **Elevator Door Opening Splash Screen**: Neon border glow animation with sliding metallic doors opening to reveal the illuminated TEKTON interior logo cabin.
2. **Comprehensive Lead Collection**:
   - Customer/Project Name, Phone Number
   - Lift Specifications (Passenger, Home, Goods, Stretcher, Capsule)
   - Floor Count / Stops (G+1 up to High-Rise)
   - Building Condition (Under Construction, Civil Ready, Retrofit)
   - **GPS Coordinates**: Auto-detects GPS coordinates with map preview.
   - **Site Photo Capture**: Direct phone camera input with thumbnail preview and Base64 encoding.
   - Civil Shaft & Shaft Dimension Remarks.
3. **End-to-End Operational Lifecycle Tracking**:
   - 7 Lifecycle Stages: *1. New Lead* ➔ *2. Site Survey* ➔ *3. Quotation Shared* ➔ *4. Order Won* ➔ *5. Manufacturing & Dispatch* ➔ *6. Shaft Erection* ➔ *7. Testing & Handover*.
4. **Interactive Views**:
   - **Home View**: Executive KPI metrics, quick actions, 7-stage visualizer, and recent enquiry feed.
   - **Lead Inspection Modal**: Instant WhatsApp integration, phone dialer, GPS map directions, site photo viewer, and stage controller.
   - **Operations View**: Active installation site log and civil shaft readiness status.
   - **Analytics View**: Conversion funnel rates and demand by lift type.
5. **Zero-Cost Hosting**: Runs free on GitHub Pages and syncs directly with Google Sheets and Google Drive.

---

## 🚀 Quick Setup Instructions

### Step 1: Deploying the Frontend Web App (GitHub Pages)
1. Log into your GitHub account and create a new public repository (e.g., `tekton-lead-app`).
2. Upload `index.html` into the main branch.
3. Go to **Settings > Pages**.
4. Set Source to `main` branch and click **Save**.
5. Your app is live at `https://yourusername.github.io/tekton-lead-app/`.

### Step 2: Setting up Free Google Sheets Database & Apps Script
1. Create a new **Google Sheet** named `TEKTON_Leads_Database`.
2. Add the following column headers in Row 1:
   `Date Logged | Lead ID | Customer Name | Phone Number | Lift Type | Stops | Building Status | Location GPS | Remarks | Lifecycle Stage | Site Photo Link`
3. Click **Extensions > Apps Script**.
4. Delete default code, paste the contents of `google_apps_script.js`, and insert your Google Drive Folder ID.
5. Click **Deploy > New Deployment > Web App**.
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
6. Copy the generated **Web App URL** and paste it into `index.html` (`GOOGLE_WEB_APP_URL`).

---

© 2026 TEKTON Elevators. Elevating Superior Spaces.

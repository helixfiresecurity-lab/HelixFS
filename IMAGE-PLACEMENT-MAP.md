# Helix image placement map

Source folder: `Images for Website` (client pack).  
Deployed to: `public/images/` (same folder structure).

Last synced from client pack: full `rsync --delete` into `public/images/`.

## How placement works

| Folder path | Website use |
|-------------|-------------|
| `000 - HOME PAGE/` | Home-only marketing shots (hero slider, fire-risk block, contact CTA, core commitments) |
| `{Category}/Image for main …` | Category landing hero + matching home service card background |
| `{Category}/{Service subfolder}/` | That service page hero (`service-groups.ts`) |

PDF review files name exact filenames for home page swaps; service heroes follow subfolder convention below.

---

## 000 – HOME PAGE (client PDFs)

| Image file | Website use |
|------------|-------------|
| `Modern corporate office lobby - hero slide.png` | Home hero slide 1 (Fire) — not duplicated on service cards |
| `CCTV External 1 - hero slide.png` | Home hero slide 2 (Security) |
| `Compliance - hero slide.png` | Home hero slide 3 (Compliance) |
| `Undertaking fire risk assessment.png` | Home “Your Responsibility to Fire Safety” section (replaces video) |
| `Engineer in the field.png` | Home core commitments feature image |
| `Contact Helix.png` | Home closing CTA visual + About landing |

---

## Category main heroes

| Image file | Page URL |
|------------|----------|
| `001 - FIRE SYSTEMS/Image for main fire systems page - reception scene.png` | `/fire-systems` + home Fire Systems card |
| `002 - SECURITY SYSTEMS/Image for main security systems page - warehouse scene.png` | `/security` + home Security card |
| `003 - EMERGENCY SYSTEMS/Image for main emergency systems page - hospital scene.png` | `/emergency-systems` + home Emergency card |
| `004 - SMART SYSTEMS/Image for main smart systems page - modern home scene.png` | `/smart-systems` + home Smart card |
| `005 - COMPLIANCE/Image for main compliance page - office scene.png` | `/compliance` + home Compliance card |

---

## Service page heroes (`service-groups.ts`)

### Fire Systems (`001 - FIRE SYSTEMS`)

| Subfolder | Image (hero) | URL |
|-----------|--------------|-----|
| `001 - Fire Alarm Systems` | `Tech HQ and glass corridor 2.png` | `/fire-systems/fire-alarm-systems` |
| `002 - Fire Extinguishers` | `Wall Mounted UK Fire Extinguishers in Modern Warehouse.png` | `/fire-systems/fire-extinguishers-supply-servicing` |
| `003 - AOV Smoke Ventilation Systems` | `AOV residential daytime.png` | `/fire-systems/aov-smoke-ventilation-systems` |
| `004 - Fire Safety Signage` | `Fire safety signage in University Library.png` | `/fire-systems/fire-safety-signage` |

### Security Systems (`002 - SECURITY SYSTEMS`)

| Subfolder | Image (hero) | URL |
|-----------|--------------|-----|
| `001 - CCTV Systems` | `CCTV External 2.png` | `/security/cctv-surveillance` |
| `002 - Intruder Alarm Systems` | `Internal alarm keypad and PIR sensor.png` | `/security/intruder-alarms` |
| `003 - Access Control Systems` | `Internal smart storage centre keypad.png` | `/security/access-control` |
| `004 - Intercom Systems` | `External Voice only intercom to residence.png` | `/security/intercom-systems` |
| `005 - Gate Automation` | `Gate automation on a business park.png` | `/security/gate-automation` |

### Emergency Systems (`003 - EMERGENCY SYSTEMS`)

| Subfolder | Image (hero) | URL |
|-----------|--------------|-----|
| `001 - Emergency Lighting` | `Emergency escape lighting - Hospital corridor.png` | `/emergency-systems/emergency-lighting` |
| `002 - Emergency Voice Communication - EVC` | `EVC Main Panel -  University lobby.png` | `/emergency-systems/emergency-voice-communication-evc` |
| `003 - Nurse Call Systems` | `Nurse call point beside hospital bed.png` | `/emergency-systems/nurse-call-systems` |
| `004 - Emergency & Escape Route Signage` | `Emergency signage in apartment corridor.png` | `/emergency-systems/emergency-escape-route-signage` |

### Smart Systems (`004 - SMART SYSTEMS`)

| Subfolder | Image (hero) | URL |
|-----------|--------------|-----|
| `001 - Smart Home Automation` | `Smart Home Automation in a modern home 1.png` | `/smart-systems/smart-home-automation` |
| `002 - Wi-Fi  Network & IP Solutions` | `Wifi network in a modern setting 1.png` | `/smart-systems/wi-fi-network-ip-solutions` |
| `003 - Minor Electrical Works` | `Minor Electrical works 1.png` | `/smart-systems/minor-electrical-works` |

Note: PAT assets live under `005 - COMPLIANCE/004 - Portable Appliance Testing PAT/` only (removed from Smart folder).

### Compliance (`005 - COMPLIANCE`)

| Subfolder | Image (hero) | URL |
|-----------|--------------|-----|
| `001 - Certification & Compliance` | `Certification & Compliance 1.png` | `/compliance/certification-compliance` |
| `002 - Safety Inspections & Testing` | `Safety inspections & testing in a modern factory.png` | `/compliance/safety-inspections-testing` |
| `003 - Regulatory Compliance Service` | `Regulatory Compliance Service 1.png` | `/compliance/regulatory-compliance-services` |
| `004 - Portable Appliance Testing PAT` | `PAT testing in a factory.png` | `/compliance/portable-appliance-testing-pat` |

Alternate in pack (not used as hero): `Safety inspections & testing in office corridor.png`.

---

## Other site references

| Location | Image |
|----------|-------|
| Home testimonials (if enabled) | `Restaurant.png`, `Tech HQ…`, `High End Cafe.png`, `Hotel.png` (Fire Alarm Systems folder) |
| About / Resources / Our Company info pages | Mapped to relevant pack folders in `content-pages/content.ts` |
| Legacy `fire-systems/content.ts` | Unused by routes; kept for reference only |

---

## Sync command (re-run when client sends updates)

```bash
chmod -R u+w public/images
rsync -av --delete "/path/to/Images for Website/" "public/images/"
```

Then verify references:

```bash
# From helix-launch-site root — checks every /images/... path in app/ exists on disk
python3 -c "import re; from pathlib import Path; ..."
```

# Security Specification & Threat Model: NutriDiversa CMS & Member Portal

## 1. Data Invariants
1. **Admin & Board Authority**: Only authenticated users with board roles (admin, presidente, secretario, vocal) or users in `/admins/$(request.auth.uid)` or the bootstrapped admin (`cesar626313978@gmail.com`) can mutate global CMS site configuration (`/site_config/{configId}`), upload media files, and publish articles.
2. **Identity Integrity**: Normal users cannot self-assign board roles (`admin`, `presidente`, `secretario`, `vocal`) or grant themselves `canEditSite`, `canManageUsers`, or `canPublishArticles`. Role promotions can only be authored by `admin` or `presidente`.
3. **Role-Based Access for Partners (Socios)**: Articles marked with `visibility == 'members_only'` and items in `/partner_resources` can only be read by verified members (role in `['admin', 'presidente', 'secretario', 'vocal', 'socio']`), protecting private member advantages from unauthenticated scrapers and standard anonymous visitors.
4. **Article Authorship & Immutability**: Any created article must bind `authorId == request.auth.uid`. Existing articles cannot have their `id`, `authorId`, or `createdAt` modified on updates.
5. **PII and Profile Isolation**: Regular users can only read and edit their own `/users/{userId}` profile document. Only admins and board members with user management rights can inspect or modify other user roles.
6. **Denial of Wallet Protection**: All string fields are capped with maximum length constraints (e.g., titles <= 300 chars, ids <= 128 chars, content <= 50,000 chars) to prevent storage and bandwidth exhaustion attacks.

## 2. The Dirty Dozen Malicious Payloads
1. **Self-Promotion to Superadmin**: User creates `/users/attackerUid` with `{ "role": "admin", "canManageUsers": true }`.
2. **Ghost Field Injection in Site Config**: An attacker attempts to inject `{ "primaryColor": "#123", "shadowBackdoor": "true" }` via unvalidated update.
3. **Unauthorized Site Branding Mutation**: Regular registered user attempts to alter `/site_config/general` colors and hero copy.
4. **Member-Only Resource Exfiltration**: Unauthenticated or normal `usuario` requests documents from `/partner_resources/exclusive-guide-1`.
5. **Article Spoofing (Hijacked Author)**: An attacker creates an article in `/articles/art123` setting `authorId` to the association President's UID.
6. **Immutable Field Tampering**: User attempts to update an article modifying the original `createdAt` timestamp and `authorId`.
7. **Giant Payload Attack**: An attacker sends a 15MB base64 string into `title` or `slug` violating size constraints.
8. **Path ID Poisoning**: Document creation targeted at `/users/../../../malicious_path` with an illegal character format.
9. **Unverified Email Privilege Escalation**: User signs in with an unverified email claiming admin rights without `email_verified == true`.
10. **State Corruption via Terminal Override**: Non-admin attempts to update a published article's state or delete official documents.
11. **Media Library Tampering**: Standard user attempts to delete official logos or replace header graphics in `/media_files`.
12. **Blanket Query Scraping**: Malicious client attempts an unfiltered query against `/partner_resources` without authenticated member status.

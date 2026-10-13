/* CASS Knowledge Centre: admin accounts. Loaded by admin.html only; reader pages never load this file.
   It is valid JSON inside the assignment, so admin.html can import it. Do not edit by hand: use admin.html (Settings › Accounts), then publish.
   Passwords are stored only as salted SHA-256 hashes. This file sits in the shared folder, so use strong, unique passwords. */
window.KM_ACCOUNTS = {
  "version": 1,
  "accounts": [
    {
      "id": "adminpe",
      "name": "Process Excellence",
      "username": "AdminPE",
      "personId": "jules",
      "type": "superadmin",
      "towers": [
        "all"
      ],
      "roles": [
        "owner",
        "approver"
      ],
      "passwordHash": "a6ba777bf6f774dded976a4ff84379dd908b8ed12a3794eb0490f5eb96da1698",
      "mustChange": false,
      "active": true,
      "created": "2026-10-13",
      "createdBy": "Migrated from the shared login"
    }
  ]
};

/* CASS Knowledge Centre: all site content in one file.
   The Knowledge Centre, the New Joiner Academy and the admin page read this file (window.KM_DATA).
   It is valid JSON inside the assignment, so admin.html can import it safely. Do not edit by hand: use admin.html, then Download km-data.js and replace this file.
   Sample people, dates and content in this pilot are fictional. */
window.KM_DATA = {
  "settings": {
    "siteName": "CASS Knowledge Centre",
    "version": 1,
    "lastPublished": "2026-10-12",
    "lastPublishedBy": "Process Excellence",
    "adminUser": "AdminPE",
    "passwordSalt": "cass-km-2026",
    "adminPasswordHash": "7a24697b3c6f39e461b9bd60ef25402b67f3f33d8f4b66a0a0eb064ba869f9c6",
    "newBadgeDays": 30,
    "companies": [
      "APS",
      "ACE",
      "AMS"
    ],
    "banner": {
      "on": true,
      "text": "Pilot version. People, content and dates are samples, not final."
    },
    "adminNames": [
      "Jules Pemberton",
      "Tasha Verlinden"
    ]
  },
  "taxonomy": [
    {
      "code": "1",
      "name": "Customer Operations",
      "l1": [
        {
          "code": "1.1",
          "name": "Customer Success",
          "l2": [
            {
              "code": "1.1.1",
              "name": "Customer Data Management"
            },
            {
              "code": "1.1.2",
              "name": "Contract Management"
            },
            {
              "code": "1.1.3",
              "name": "Capture & Monitor Orders"
            },
            {
              "code": "1.1.4",
              "name": "Fulfil Orders"
            },
            {
              "code": "1.1.5",
              "name": "Billing & Invoicing"
            },
            {
              "code": "1.1.6",
              "name": "Collection Management"
            },
            {
              "code": "1.1.7",
              "name": "Customer Satisfaction"
            },
            {
              "code": "1.1.8",
              "name": "Freight Invoice"
            },
            {
              "code": "1.1.9",
              "name": "Supporting Activities: Reporting & Continuous Improvement"
            }
          ]
        }
      ]
    },
    {
      "code": "2",
      "name": "Procurement",
      "l1": [
        {
          "code": "2.1",
          "name": "Procurement Operations",
          "l2": [
            {
              "code": "2.1.1",
              "name": "Vendor Data Management (PO)"
            },
            {
              "code": "2.1.2",
              "name": "Material Master – Procurement"
            },
            {
              "code": "2.1.3",
              "name": "Outline Agreement Management"
            },
            {
              "code": "2.1.4",
              "name": "Request to Purchase (RTP)"
            },
            {
              "code": "2.1.5",
              "name": "Inventory Management – Supply Side"
            },
            {
              "code": "2.1.6",
              "name": "Project Turnaround (PTA)"
            },
            {
              "code": "2.1.7",
              "name": "Spot Buy"
            }
          ]
        },
        {
          "code": "2.2",
          "name": "Commercial Operations (S2C)",
          "l2": [
            {
              "code": "2.2.1",
              "name": "Contract Management"
            },
            {
              "code": "2.2.2",
              "name": "Strategic / Agile Sourcing"
            }
          ]
        }
      ]
    },
    {
      "code": "3",
      "name": "Finance & Accounting",
      "l1": [
        {
          "code": "3.1",
          "name": "Order to Cash (O2C)",
          "l2": [
            {
              "code": "3.1.1",
              "name": "Credit Management"
            },
            {
              "code": "3.1.2",
              "name": "Account Receivables"
            },
            {
              "code": "3.1.3",
              "name": "Maintain Pricing and Discount"
            }
          ]
        },
        {
          "code": "3.2",
          "name": "Purchase to Pay (P2P)",
          "l2": [
            {
              "code": "3.2.1",
              "name": "Invoice Receiving"
            },
            {
              "code": "3.2.2",
              "name": "Invoice Validation"
            },
            {
              "code": "3.2.3",
              "name": "Travel & Entertainment"
            },
            {
              "code": "3.2.4",
              "name": "Vendor Data Management (PO & Non-PO)"
            }
          ]
        },
        {
          "code": "3.3",
          "name": "Record to Report (R2R)",
          "l2": [
            {
              "code": "3.3.1",
              "name": "Master Data Management"
            },
            {
              "code": "3.3.2",
              "name": "General Ledger (GL) Accounting"
            },
            {
              "code": "3.3.3",
              "name": "Fixed Assets Accounting"
            },
            {
              "code": "3.3.4",
              "name": "Lease Accounting"
            },
            {
              "code": "3.3.5",
              "name": "Intercompany Accounting"
            },
            {
              "code": "3.3.6",
              "name": "Financial Close & Consolidation"
            },
            {
              "code": "3.3.7",
              "name": "Statutory & Regulatory Reporting"
            }
          ]
        },
        {
          "code": "3.4",
          "name": "Tax",
          "l2": [
            {
              "code": "3.4.1",
              "name": "Tax Data Management"
            },
            {
              "code": "3.4.2",
              "name": "Tax Calculation & Validation"
            },
            {
              "code": "3.4.3",
              "name": "Tax Reporting & Compliance"
            },
            {
              "code": "3.4.4",
              "name": "Tax Reconciliation"
            },
            {
              "code": "3.4.5",
              "name": "Tax Audit Report"
            },
            {
              "code": "3.4.6",
              "name": "Tax Refund & Recovery"
            }
          ]
        },
        {
          "code": "3.5",
          "name": "Treasury",
          "l2": [
            {
              "code": "3.5.1",
              "name": "Front Office Operations"
            },
            {
              "code": "3.5.2",
              "name": "Back Office Operations"
            },
            {
              "code": "3.5.3",
              "name": "Control & Payment"
            }
          ]
        },
        {
          "code": "3.6",
          "name": "Energy Risk Accounting (ERA)",
          "l2": [
            {
              "code": "3.6.1",
              "name": "Cost Accounting & Controlling"
            },
            {
              "code": "3.6.2",
              "name": "Inventory Counting & Reconciliation"
            }
          ]
        },
        {
          "code": "3.7",
          "name": "Fin Planning & Analysis (FP&A)",
          "l2": [
            {
              "code": "3.7.1",
              "name": "Planning & Budgeting"
            },
            {
              "code": "3.7.2",
              "name": "Management Reporting"
            },
            {
              "code": "3.7.3",
              "name": "Profitability Analysis"
            },
            {
              "code": "3.7.4",
              "name": "Investment Controlling"
            }
          ]
        }
      ]
    },
    {
      "code": "4",
      "name": "Human Resources",
      "l1": [
        {
          "code": "4.1",
          "name": "Human Resources Operations",
          "l2": [
            {
              "code": "4.1.1",
              "name": "Employee Data Management"
            },
            {
              "code": "4.1.2",
              "name": "Recruitment"
            },
            {
              "code": "4.1.3",
              "name": "Employee Payroll Data Preparation"
            }
          ]
        }
      ]
    }
  ],
  "l3": {
    "1.1.1": [
      {
        "code": "1.1.1.1",
        "name": "Collect and request customer account information (trigger by Sales)"
      },
      {
        "code": "1.1.1.2",
        "name": "Classify and validate new customer data and active accounts"
      },
      {
        "code": "1.1.1.3",
        "name": "Modify/block customer accounts"
      },
      {
        "code": "1.1.1.4",
        "name": "Deactivate customer accounts"
      }
    ],
    "1.1.2": [
      {
        "code": "1.1.2.1",
        "name": "Create contract (before SO creation)"
      },
      {
        "code": "1.1.2.2",
        "name": "Automate and digitize contract management processes, drive process transformation and efficiency"
      }
    ],
    "1.1.3": [
      {
        "code": "1.1.3.1",
        "name": "Track and manage orders, updates and cancels"
      },
      {
        "code": "1.1.3.2",
        "name": "Automate and digitize order management processes, drive process transformation and efficiency"
      }
    ],
    "1.1.4": [
      {
        "code": "1.1.4.1",
        "name": "Processing the orders"
      },
      {
        "code": "1.1.4.2",
        "name": "Shipping the order"
      },
      {
        "code": "1.1.4.3",
        "name": "Manage 3rd party logistic providers (indirectly, just for escalation)"
      },
      {
        "code": "1.1.4.4",
        "name": "Manage reversed logistics"
      },
      {
        "code": "1.1.4.5",
        "name": "Automate and digitize order management processes, drive process transformation and efficiency"
      }
    ],
    "1.1.5": [
      {
        "code": "1.1.5.1",
        "name": "Define invoice procedures (in terms of generating invoice)"
      },
      {
        "code": "1.1.5.2",
        "name": "Create invoice and release"
      },
      {
        "code": "1.1.5.3",
        "name": "Create credit/debit note and approve"
      },
      {
        "code": "1.1.5.4",
        "name": "Manage/alignment with revenue recognition"
      },
      {
        "code": "1.1.5.5",
        "name": "Automate and digitize billing & invoicing processes, drive process transformation and efficiency"
      }
    ],
    "1.1.6": [
      {
        "code": "1.1.6.1",
        "name": "Execute system adjustment for delinquent account balances (as needed)"
      },
      {
        "code": "1.1.6.2",
        "name": "Follow up on overdue payments and manage collection activities"
      },
      {
        "code": "1.1.6.3",
        "name": "Automate and digitize collection management processes, drive process transformation and efficiency"
      }
    ],
    "1.1.7": [
      {
        "code": "1.1.7.1",
        "name": "Develop customer service strategy"
      },
      {
        "code": "1.1.7.2",
        "name": "Plan and manage customer service workforce"
      },
      {
        "code": "1.1.7.3",
        "name": "Receive and manage customer inquiries"
      },
      {
        "code": "1.1.7.4",
        "name": "Receive and manage customer complaints"
      },
      {
        "code": "1.1.7.5",
        "name": "Analyze disputes"
      },
      {
        "code": "1.1.7.6",
        "name": "Evaluate customer service operations"
      },
      {
        "code": "1.1.7.7",
        "name": "Measure and evaluate customer satisfaction"
      },
      {
        "code": "1.1.7.8",
        "name": "Automate and digitize customer satisfaction processes, drive process transformation and efficiency"
      }
    ],
    "1.1.8": [
      {
        "code": "1.1.8.1",
        "name": "Billing preparation and data validation"
      },
      {
        "code": "1.1.8.2",
        "name": "Rating and charge application"
      },
      {
        "code": "1.1.8.3",
        "name": "Documentation and compliance handling"
      },
      {
        "code": "1.1.8.4",
        "name": "Invoice creation and dispatch"
      },
      {
        "code": "1.1.8.5",
        "name": "Dispute management and resolution"
      },
      {
        "code": "1.1.8.6",
        "name": "Financial and administration support"
      }
    ],
    "1.1.9": [
      {
        "code": "1.1.9.1",
        "name": "Liaising with Indirect Tax, Legal and Trade Compliance on trade related issue",
        "details": [
          "e.g. vet Letters of Credit (LC) for export orders, Invoke Credit-approved LOI (Letter of Indemnity) for LC customers, etc"
        ]
      },
      {
        "code": "1.1.9.2",
        "name": "Month-end closing activities",
        "details": [
          "e.g. perform and complete reporting process, as per guidelines with Customer, create and electronically distribute mutually agreed reports between Customer Ops & Finance Ops, manual update of CCS and NRV price, etc"
        ]
      },
      {
        "code": "1.1.9.3",
        "name": "Prepare and manage daily / weekly / monthly governance with Aster team on reviewing mutually agreed operational KPIs and metrices"
      },
      {
        "code": "1.1.9.4",
        "name": "Receive Sample Request and coordinate the sample delivery request with relevant parties",
        "details": [
          "Trade Agent, Warehouse, Research Lab, Sample Requestor and Customer"
        ]
      },
      {
        "code": "1.1.9.5",
        "name": "Support management of service providers",
        "details": [
          "e.g. maintain relevant vendor system admin access, support Logistics Manager to provide timely performance review of land logistics and Freight Forwarder service providers, support Trade Compliance Manager to provide timely performance review of Trade Agent service provider, etc"
        ]
      },
      {
        "code": "1.1.9.6",
        "name": "Automate and digitize customer operations processes, drive process transformation and efficiency"
      }
    ],
    "2.1.1": [
      {
        "code": "2.1.1.1",
        "name": "Establish vendor master data policies and guideline"
      },
      {
        "code": "2.1.1.2",
        "name": "Collect vendor account information"
      },
      {
        "code": "2.1.1.3",
        "name": "Classify and validate new vendor data and active accounts"
      },
      {
        "code": "2.1.1.4",
        "name": "Modify/block vendor accounts"
      },
      {
        "code": "2.1.1.5",
        "name": "Deactivate vendor accounts"
      },
      {
        "code": "2.1.1.6",
        "name": "Vendor master data governance, reporting and continuous improvement",
        "details": [
          "identify duplicate vendor, enforce naming standards",
          "audit & access control : restrict edit rights, maintain audit trails",
          "monitor SLA and KPI performance",
          "automate and digitize vendor data management processes, drive process transformation and efficiency"
        ]
      }
    ],
    "2.1.2": [
      {
        "code": "2.1.2.1",
        "name": "Purchasing info records",
        "details": [
          "connect a material to a specific vendor",
          "stores vendor-specific details, e.g. price, delivery times, conditions for that material"
        ]
      },
      {
        "code": "2.1.2.2",
        "name": "Source list management",
        "details": [
          "defines approved vendors for a material",
          "helps control procurement by specifying which vendor can supply which material"
        ]
      },
      {
        "code": "2.1.2.3",
        "name": "Quota arrangement",
        "details": [
          "Distributes procurement quantities among multiple vendors for the same material"
        ]
      },
      {
        "code": "2.1.2.4",
        "name": "Material-vendor relationship in contracts",
        "details": [
          "Framework agreement link materials to vendors for long-term procurement"
        ]
      },
      {
        "code": "2.1.2.5",
        "name": "Automate and digitize material master processes, drive process transformation and efficiency"
      }
    ],
    "2.1.3": [
      {
        "code": "2.1.3.1",
        "name": "Input contract to the system"
      },
      {
        "code": "2.1.3.2",
        "name": "Add/amend contract to the system"
      }
    ],
    "2.1.4": [
      {
        "code": "2.1.4.1",
        "name": "Generate and issue Purchase Order (PO)"
      },
      {
        "code": "2.1.4.2",
        "name": "Share contract with customer"
      },
      {
        "code": "2.1.4.3",
        "name": "Receive & track goods/services by customer warehouse/users; resolution/facilitation of delivery related issues by supplier team"
      }
    ],
    "2.1.5": [
      {
        "code": "2.1.5.1",
        "name": "Forecast & replenishment planning"
      },
      {
        "code": "2.1.5.2",
        "name": "Re-order stock/safety stock"
      },
      {
        "code": "2.1.5.3",
        "name": "Automate and digitize inventory management processes, drive process transformation and efficiency"
      }
    ],
    "2.1.6": [
      {
        "code": "2.1.6.1",
        "name": "Supplier performance recovery"
      },
      {
        "code": "2.1.6.2",
        "name": "Contract remediation/re-baselining"
      },
      {
        "code": "2.1.6.3",
        "name": "Project turnaround management"
      },
      {
        "code": "2.1.6.4",
        "name": "Supplier replacement/re-tendering"
      },
      {
        "code": "2.1.6.5",
        "name": "Crisis procurement/emergency sourcing"
      },
      {
        "code": "2.1.6.6",
        "name": "Streamline S2P workflows, introduce automation for S2P processes, drive process transformation and efficiency"
      }
    ],
    "2.1.7": [
      {
        "code": "2.1.7.1",
        "name": "Analyze spot buy requirements ($10K-50K / <$250K)"
      },
      {
        "code": "2.1.7.2",
        "name": "Recommend and approve vendor"
      },
      {
        "code": "2.1.7.3",
        "name": "Generate & issue Purchase Order (PO)"
      },
      {
        "code": "2.1.7.4",
        "name": "Automate and digitize spot buy processes, drive process transformation and efficiency"
      }
    ],
    "2.2.1": [
      {
        "code": "2.2.1.1",
        "name": "Define term and conditions of purchase"
      },
      {
        "code": "2.2.1.2",
        "name": "Maintain contract terms and conditions"
      },
      {
        "code": "2.2.1.3",
        "name": "Create contract"
      },
      {
        "code": "2.2.1.4",
        "name": "Share contract with vendor"
      },
      {
        "code": "2.2.1.5",
        "name": "Monitor contract"
      },
      {
        "code": "2.2.1.6",
        "name": "Review contract"
      },
      {
        "code": "2.2.1.7",
        "name": "Adjust/terminate contract"
      },
      {
        "code": "2.2.1.8",
        "name": "Contract Renewals and Amendments"
      },
      {
        "code": "2.2.1.9",
        "name": "Automate and digitize contract management processes, drive process transformation and efficiency"
      }
    ],
    "2.2.2": [
      {
        "code": "2.2.2.1",
        "name": "Category strategy development",
        "details": [
          "Spend analysis, market intelligence (analyze spend by category, identify sourcing opportunities, gather market & supplier insights)"
        ]
      },
      {
        "code": "2.2.2.2",
        "name": "Sourcing pipeline planning",
        "details": [
          "Opportunity assessment, sourcing calendar (prioritize sourcing projects, align with business needs, develop annual sourcing plan)"
        ]
      },
      {
        "code": "2.2.2.3",
        "name": "Market engagement",
        "details": [
          "Supplier research, Request for Information (RFI) process (identify potential suppliers, prepare & distribute RFI and evaluate supplier capabilities)"
        ]
      },
      {
        "code": "2.2.2.4",
        "name": "RFQ/RFP management",
        "details": [
          "Bid preparation, response evaluation (develop and issue RFQ/RFP; consolidate supplier responses; perform commercial and technical evaluation)"
        ]
      },
      {
        "code": "2.2.2.5",
        "name": "Supplier negotiation & selection",
        "details": [
          "Price negotiation, award recommendation (conduct negotiation sessions, analyze total cost of ownership, prepare supplier award recommendations)"
        ]
      },
      {
        "code": "2.2.2.6",
        "name": "Source to S2C processes, reporting and continuous improvement",
        "details": [
          "KPI/SLA monitoring, risk mitigation : track supplier performance metrics; conduct supplier reviews; identify and mitigate supply risks",
          "KPI dashboard, sourcing savings : generate sourcing KPIs (cycle time, savings achieved); report supplier performance and contract compliance"
        ]
      }
    ],
    "3.1.1": [
      {
        "code": "3.1.1.1",
        "name": "Credit limit setup and monitoring"
      },
      {
        "code": "3.1.1.2",
        "name": "Risk assessment and scoring"
      },
      {
        "code": "3.1.1.3",
        "name": "Credit policy enforcement"
      },
      {
        "code": "3.1.1.4",
        "name": "Credit block resolution"
      },
      {
        "code": "3.1.1.5",
        "name": "Automate and digitize credit management processes, drive process transformation and efficiency"
      }
    ],
    "3.1.2": [
      {
        "code": "3.1.2.1",
        "name": "Payment receipt"
      },
      {
        "code": "3.1.2.2",
        "name": "Cash posting and reconciliation"
      },
      {
        "code": "3.1.2.3",
        "name": "Unapplied cash handling"
      },
      {
        "code": "3.1.2.4",
        "name": "Customer account maintenance"
      },
      {
        "code": "3.1.2.5",
        "name": "A/R aging schedule report"
      },
      {
        "code": "3.1.2.6",
        "name": "Automate and digitize A/R processes, drive process transformation and efficiency"
      },
      {
        "code": "3.1.2.7",
        "name": "Creation of Sundry invoices, upon request by business"
      },
      {
        "code": "3.1.2.8",
        "name": "Pre-billing work related to several sundry invoices"
      }
    ],
    "3.1.3": [
      {
        "code": "3.1.3.1",
        "name": "Input and maintain prices (incl. discount and loyalty program) in the system"
      },
      {
        "code": "3.1.3.2",
        "name": "Automate and digitize pricing and discount processes, drive process transformation and efficiency"
      }
    ],
    "3.2.1": [
      {
        "code": "3.2.1.1",
        "name": "Receive documents from",
        "details": [
          "external parties : vendor via email (PDF documents)",
          "internal parties : employee via email (PDF documents)"
        ]
      },
      {
        "code": "3.2.1.2",
        "name": "Verify documents (can refer to ACE's detailed procedures)",
        "details": [
          "legality documents (original/authentic vs. counterfeit documents)",
          "completeness documents based on internal agreed check list",
          "acknowledge/record the “received date” to establish the invoice due date",
          "scan all received documents and attach the scanned image in the SAP system",
          "send the acknowledgement to vendor/employee for the received documents",
          "If the document check list isn’t completed :",
          "email and request vendor for the lack of supporting documents and hold the documents that have been received until it’s completed",
          "email vendor for the wrong supporting documents received and return them via email/courier (if it’s physical document received)"
        ]
      },
      {
        "code": "3.2.1.3",
        "name": "Filing",
        "details": [
          "file all the complete document of payment process (from control and payment team), classified by :",
          "1. by legal entity",
          "2. by payment date",
          "send archived documents to designated storage facility (ensure the retention period complies with each country’s tax and legal requirements)"
        ]
      },
      {
        "code": "3.2.1.4",
        "name": "Reviewing and reporting",
        "details": [
          "create report for daily transaction : # of invoice received, invoice due date, payment date. Payment date is from control and payment team (joint effort with control and payment team)",
          "review # of physical documents vs. # of invoice in the report (daily counts)"
        ]
      },
      {
        "code": "3.2.1.5",
        "name": "External/Internal user inquiries/contact center",
        "details": [
          "receive service request from related stakeholders (internal and external) via email/call",
          "classify issue by ID job (ticketing no.), requestor, tower, type of issue, date of request, status (open, in progress, completed/closed)",
          "review status of service request based on agreed SLA (escalate issues that haven’t been solved/met SLA)",
          "close the solved/completed service issue by each tower"
        ]
      },
      {
        "code": "3.2.1.6",
        "name": "Automate and digitize invoice receiving processes, drive process transformation and efficiency"
      }
    ],
    "3.2.2": [
      {
        "code": "3.2.2.1",
        "name": "Verify/validate invoice",
        "details": [
          "validate commercial invoice against PO (price, qty)",
          "validate vendor bank beneficiary vs. invoice/statement of vendor vs. bank beneficiary’s previous transaction",
          "validate approved delivery slip / proof of performance especially if it’s not 3 way match PO",
          "validate ASM (Authorized Signature Matrix) approval",
          "validate tax invoice"
        ]
      },
      {
        "code": "3.2.2.2",
        "name": "Review posted invoice"
      },
      {
        "code": "3.2.2.3",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "create reversal journal as needed",
          "create monthly report, e.g. “open adv. payment update report”, “outstanding GR report”, etc.",
          "KPI/SLA monitoring, risk mitigation : timely posted & payment",
          "automate and digitize invoice validation processes, drive process transformation and efficiency",
          "manage and resolve vendor queries received in the ACE-vendorhelpdesk mailbox",
          "monthly Payroll on time posting and CPF direct debit clearing",
          "monthly accruals related to payrolls"
        ]
      }
    ],
    "3.2.3": [
      {
        "code": "3.2.3.1",
        "name": "Verify/validate documents",
        "details": [
          "verify approval of travel request and travel expenses from line manager",
          "verify supporting documents against user input (reimbursement)"
        ]
      },
      {
        "code": "3.2.3.2",
        "name": "Post reimbursement, notify the verification/validation"
      },
      {
        "code": "3.2.3.3",
        "name": "Review posted document"
      },
      {
        "code": "3.2.3.4",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "monthly T&E spending, by cost center, by username (part of T&E audit report)",
          "KPI/SLA monitoring, risk mitigation",
          "automate and digitize travel and entertainment processes, drive process transformation and efficiency",
          "managing and resolving queries on ACE-staff claims mailbox",
          "administering changes in Concur, liaising with concur development team when needed in trying to resolve the staff queries"
        ]
      }
    ],
    "3.2.4": [
      {
        "code": "3.2.4.1",
        "name": "VPO Vendor",
        "details": [
          "Update data related to Finance (bank account, payment term, etc.)"
        ]
      },
      {
        "code": "3.2.4.2",
        "name": "Collect vendor account information (Non-PO Vendor)"
      },
      {
        "code": "3.2.4.3",
        "name": "Classify and validate new vendor data and active accounts (Non-PO Vendor)"
      },
      {
        "code": "3.2.4.4",
        "name": "Modify/block vendor accounts (Non-PO Vendor)"
      },
      {
        "code": "3.2.4.5",
        "name": "Deactivate vendor accounts (Non-PO Vendor)"
      },
      {
        "code": "3.2.4.6",
        "name": "Vendor master data governance, reporting and continuous improvement (Non-PO Vendor)",
        "details": [
          "identify duplicate vendor, enforce naming standards",
          "audit & access control : restrict edit rights, maintain audit trails",
          "monitor SLA and KPI performance",
          "automate and digitize vendor data management processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.1": [
      {
        "code": "3.3.1.1",
        "name": "CoA design and governance",
        "details": [
          "define CoA structure (segments, hierarchy, coding logic)",
          "align CoA with financial reporting, statutory and management needs",
          "establish CoA design principles and naming conventions",
          "review and approve CoA changes via governance board"
        ]
      },
      {
        "code": "3.3.1.2",
        "name": "CoA master data maintenance",
        "details": [
          "Modify, block/retire and maintain account attribute, e.g. account type, reconciliation indicator, etc."
        ]
      },
      {
        "code": "3.3.1.3",
        "name": "CoA mapping and integration",
        "details": [
          "map local CoA to group CoA (for consolidation)",
          "align CoA with cost centers, profit centers and functional areas",
          "support integration with tax codes, asset classes"
        ]
      },
      {
        "code": "3.3.1.4",
        "name": "CoA request management",
        "details": [
          "validate changes",
          "route approval based on impact and thresholds",
          "track record status and turnaround time",
          "communicate outcomes to stakeholders"
        ]
      },
      {
        "code": "3.3.1.5",
        "name": "CoA data quality and controls",
        "details": [
          "perform periodic data cleansing",
          "identify unused and duplicate accounts",
          "monitor compliance with naming and usage policies",
          "run validation checks, e.g. open items, postings, reconciliation"
        ]
      },
      {
        "code": "3.3.1.6",
        "name": "CoA change impact and assessment",
        "details": [
          "simulate changes in test environment",
          "communicate risks and mitigation plan"
        ]
      },
      {
        "code": "3.3.1.7",
        "name": "CoA compliance and audit",
        "details": [
          "maintain audit trail of CoA changes",
          "support internal and external audits",
          "ensure segregation duties in CoA maintenance"
        ]
      },
      {
        "code": "3.3.1.8",
        "name": "CoA training and documentation",
        "details": [
          "Develop and maintain CoA manuals and guidelines"
        ]
      },
      {
        "code": "3.3.1.9",
        "name": "CoA lifecycle review and optimization",
        "details": [
          "periodic review of CoA structure and usage",
          "recommend rationalization or redesign",
          "align with evolving business models and reporting needs",
          "benchmark against industry best practice"
        ]
      },
      {
        "code": "3.3.1.10",
        "name": "CoA reporting and analytics",
        "details": [
          "provide CoA usage reports",
          "analyze account-level posting trends",
          "enable drill-down and traceability for reconciliations"
        ]
      },
      {
        "code": "3.3.1.11",
        "name": "Establish customer master data policies and guideline"
      },
      {
        "code": "3.3.1.12",
        "name": "Receive data request from CO and update customer master data"
      },
      {
        "code": "3.3.1.13",
        "name": "Customer master data governance, reporting and continuous improvement",
        "details": [
          "identify duplicate customer, enforce naming standards",
          "audit & access control : restrict edit rights, maintain audit trails",
          "monitor SLA and KPI performance",
          "automate and digitize customer data management processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.2": [
      {
        "code": "3.3.2.1",
        "name": "Record general journal entries"
      },
      {
        "code": "3.3.2.2",
        "name": "Record adjusting (incl. reversal) journal entries"
      },
      {
        "code": "3.3.2.3",
        "name": "Reconcile general ledger accounts"
      },
      {
        "code": "3.3.2.4",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "month-end/periodically trend analysis, anomaly data analysis",
          "automate and digitize GL accounting processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.3": [
      {
        "code": "3.3.3.1",
        "name": "Capitalize fixed assets"
      },
      {
        "code": "3.3.3.2",
        "name": "Calculate depreciation"
      },
      {
        "code": "3.3.3.3",
        "name": "Dispose of fixed assets"
      },
      {
        "code": "3.3.3.4",
        "name": "Reconcile fixed asset accounts"
      },
      {
        "code": "3.3.3.5",
        "name": "Fixed assets periodically physical counts plan (joint effort with other functions)"
      },
      {
        "code": "3.3.3.6",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "monthly report fixed assets analysis",
          "automate and digitize fixed assets accounting processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.4": [
      {
        "code": "3.3.4.1",
        "name": "Create new leases"
      },
      {
        "code": "3.3.4.2",
        "name": "Calculate depreciation"
      },
      {
        "code": "3.3.4.3",
        "name": "Retire lease when required"
      },
      {
        "code": "3.3.4.4",
        "name": "Monitoring lease invoices via various external portals and coordination with AP team for posting into AP Control account for Lease liability balances"
      },
      {
        "code": "3.3.4.5",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "monthly report leases",
          "automate and digitize fixed assets accounting processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.5": [
      {
        "code": "3.3.5.1",
        "name": "Record intercompany transactions"
      },
      {
        "code": "3.3.5.2",
        "name": "Invoice intercompany charges"
      },
      {
        "code": "3.3.5.3",
        "name": "Perform intercompany eliminations for consolidation"
      },
      {
        "code": "3.3.5.4",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "monthly report intercompany account analysis",
          "automate and digitize intercompany accounting processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.6": [
      {
        "code": "3.3.6.1",
        "name": "Execute monthly/year-end close"
      },
      {
        "code": "3.3.6.2",
        "name": "Consolidate group financial statement"
      },
      {
        "code": "3.3.6.3",
        "name": "Eliminate intercompany transactions"
      },
      {
        "code": "3.3.6.4",
        "name": "Reconcile consolidated account"
      },
      {
        "code": "3.3.6.5",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "KPI/SLA monitoring, risk mitigation",
          "automate and financial close and consolidation processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.3.7": [
      {
        "code": "3.3.7.1",
        "name": "Prepare external financial statement reports (IFRS, GAAP, PSAK)"
      },
      {
        "code": "3.3.7.2",
        "name": "Submit reports to regulators"
      },
      {
        "code": "3.3.7.3",
        "name": "Support internal audit, external parties (bank, shareholders, etc.) and investment relations"
      },
      {
        "code": "3.3.7.4",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "KPI/SLA monitoring, risk mitigation",
          "automate and digitize statutory and regulatory reporting processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.4.1": [
      {
        "code": "3.4.1.1",
        "name": "Collect tax relevant data from ERP and other source systems"
      },
      {
        "code": "3.4.1.2",
        "name": "Validate taxpayer ID, tax codes and transaction classifications"
      },
      {
        "code": "3.4.1.3",
        "name": "Archive and maintain tax data in compliance with regulatory requirements"
      },
      {
        "code": "3.4.1.4",
        "name": "Automate and digitize tax data management processes, drive process transformation and efficiency"
      },
      {
        "code": "3.4.1.5",
        "name": "Maintain and enhance ERP tax configuration",
        "details": [
          "e.g., SAP tax codes"
        ]
      },
      {
        "code": "3.4.1.6",
        "name": "Participate in IT projects",
        "details": [
          "Migrations, upgrades, automation initiatives"
        ]
      }
    ],
    "3.4.2": [
      {
        "code": "3.4.2.1",
        "name": "Calculate tax liability based on transactional data",
        "details": [
          "e.g. GST/VAT, income tax"
        ]
      },
      {
        "code": "3.4.2.2",
        "name": "Apply correct tax rates and formulas per latest regulations"
      },
      {
        "code": "3.4.2.3",
        "name": "Cross-validate tax calculations with accounting entries"
      },
      {
        "code": "3.4.2.4",
        "name": "Automate and digitize tax calculation/validation processes, drive process transformation and efficiency"
      }
    ],
    "3.4.3": [
      {
        "code": "3.4.3.1",
        "name": "Prepare periodic tax reports",
        "details": [
          "e.g. GST/VAT returns, annual income tax filing"
        ]
      },
      {
        "code": "3.4.3.2",
        "name": "Submit reports to tax authorities via e-Filing or designated platforms"
      },
      {
        "code": "3.4.3.3",
        "name": "Ensure compliance with deadlines, formats and jurisdictional rules"
      },
      {
        "code": "3.4.3.4",
        "name": "Prepare tax payment instructions and ensure timely settlement (GST/VAT, WHT, CIT, property tax instalments)"
      },
      {
        "code": "3.4.3.5",
        "name": "Reconcile tax cash flows with Treasury and Controller (AP) teams"
      }
    ],
    "3.4.4": [
      {
        "code": "3.4.4.1",
        "name": "Reconcile tax postings with general ledger and sub-ledger data"
      },
      {
        "code": "3.4.4.2",
        "name": "Identify and resolve discrepancies or misclassifications"
      },
      {
        "code": "3.4.4.3",
        "name": "Document reconciliation results for audit and compliance purposes"
      },
      {
        "code": "3.4.4.4",
        "name": "Automate and digitize tax reconciliation processes, drive process transformation and efficiency"
      }
    ],
    "3.4.5": [
      {
        "code": "3.4.5.1",
        "name": "Compile supporting documentation for internal or external tax audits"
      },
      {
        "code": "3.4.5.2",
        "name": "Draft formal responses to audit findings or inquiries"
      },
      {
        "code": "3.4.5.3",
        "name": "Coordinate with legal, finance and external auditors as needed"
      },
      {
        "code": "3.4.5.4",
        "name": "Support preparation of transfer pricing reports",
        "details": [
          "Local files, master file, CbCR"
        ]
      }
    ],
    "3.4.6": [
      {
        "code": "3.4.6.1",
        "name": "Identify opportunities for tax refunds or incentives"
      },
      {
        "code": "3.4.6.2",
        "name": "Prepare and submit refund claims with required documentation"
      },
      {
        "code": "3.4.6.3",
        "name": "Monitor claim status and follow up with tax authorities until resolution"
      }
    ],
    "3.5.1": [
      {
        "code": "3.5.1.1",
        "name": "Cash and liquidity management",
        "details": [
          "cash positioning & forecasting",
          "% of available cash invested",
          "intercompany funding and pooling",
          "intercompany netting and settlement"
        ]
      },
      {
        "code": "3.5.1.2",
        "name": "Bank relationship management",
        "details": [
          "bank account opening/closure",
          "bank fee/service negotiation",
          "KYC and bank documentation",
          "Corporate Card Management",
          "bank maintenance",
          "iBanking administration"
        ]
      },
      {
        "code": "3.5.1.3",
        "name": "Debt and capital markets",
        "details": [
          "bond or debt issuance",
          "bilateral/syndicated loans",
          "credit facility management"
        ]
      },
      {
        "code": "3.5.1.4",
        "name": "Foreign exchange F(x) and hedging",
        "details": [
          "F(x) exposure management",
          "hedging strategy & execution"
        ]
      },
      {
        "code": "3.5.1.5",
        "name": "Strategic treasury advisory",
        "details": [
          "capital structure optimization",
          "scenario analysis and stress testing",
          "M&A and corporate action support",
          "benchmarking and best practices"
        ]
      }
    ],
    "3.5.2": [
      {
        "code": "3.5.2.1",
        "name": "Risk management and compliance",
        "details": [
          "financial risk identification & mitigation",
          "regulatory compliance (SOX, IFRS, GAAP, PSAK)",
          "internal control & audit"
        ]
      },
      {
        "code": "3.5.2.2",
        "name": "Transaction operations",
        "details": [
          "transaction settlement and reconciliation",
          "treasury accounting entries",
          "internal/external reporting"
        ]
      },
      {
        "code": "3.5.2.3",
        "name": "Treasury technology and systems",
        "details": [
          "Treasury Management System (TMS)",
          "ERP and bank integration",
          "process automation and digitalization",
          "cybersecurity and data access"
        ]
      }
    ],
    "3.5.3": [
      {
        "code": "3.5.3.1",
        "name": "Review and control payment",
        "details": [
          "review the correctness of posted invoice in daily basis",
          "check the duplicate payment",
          "check down payment, open credit note",
          "check payment term changes"
        ]
      },
      {
        "code": "3.5.3.2",
        "name": "Create payment file (input payment)",
        "details": [
          "input payment to internet banking (transfer)",
          "create payment voucher (cash)",
          "print transfer slip"
        ]
      },
      {
        "code": "3.5.3.3",
        "name": "Execute/release payment",
        "details": [
          "approve transferred amount following bank beneficiary vs. approved document that has been inputted in internet banking (transfer)",
          "pay cash to vendor (cash)",
          "get vendor’s signature in payment voucher and remittance slip from vendor (cash)"
        ]
      },
      {
        "code": "3.5.3.4",
        "name": "Input clearing bank"
      },
      {
        "code": "3.5.3.5",
        "name": "Clearing from “clearing bank’ to “main bank”",
        "details": [
          "clearing after bank statement process",
          "archive bank documentation per transaction"
        ]
      },
      {
        "code": "3.5.3.6",
        "name": "Post payment review",
        "details": [
          "check the direct debit transaction (utilities, etc.)",
          "check the bounce back payment"
        ]
      },
      {
        "code": "3.5.3.7",
        "name": "Reporting, continuous improvement and supporting activities",
        "details": [
          "estimated fund request for the following week, cash flow forecast data, etc.",
          "KPI/SLA monitoring, risk mitigation",
          "automate and digitize control and payment processes, drive process transformation and efficiency"
        ]
      }
    ],
    "3.6.1": [
      {
        "code": "3.6.1.1",
        "name": "Set up and update cost allocations attributes"
      },
      {
        "code": "3.6.1.2",
        "name": "Execute cost allocation periodically"
      },
      {
        "code": "3.6.1.3",
        "name": "Analyze cost variances, investigate and document reasons (commentaries) for cost deviations"
      },
      {
        "code": "3.6.1.4",
        "name": "Perform month-end closing for cost related costing activities"
      }
    ],
    "3.6.2": [
      {
        "code": "3.6.2.1",
        "name": "Schedule cycle counts, define frequency and scope of item-level counts"
      },
      {
        "code": "3.6.2.2",
        "name": "Generate counts sheets, create system-based or manual template for counting"
      },
      {
        "code": "3.6.2.3",
        "name": "Perform physical count, execute actual stock count in warehouse"
      },
      {
        "code": "3.6.2.4",
        "name": "Enter count results, input counted quantities into ERP or WMS"
      },
      {
        "code": "3.6.2.5",
        "name": "Post inventory differences, record adjustments for overages or shortages"
      },
      {
        "code": "3.6.2.6",
        "name": "Analyze and investigate root causes of discrepancies"
      },
      {
        "code": "3.6.2.7",
        "name": "Reconcile inventory between physical vs. system records, resolve mismatches"
      },
      {
        "code": "3.6.2.8",
        "name": "Support and provide documentation for audit validation"
      },
      {
        "code": "3.6.2.9",
        "name": "Freeze/unfreeze inventory, temporarily block transactions during counting"
      },
      {
        "code": "3.6.2.10",
        "name": "Automate and digitize inventory counting and reconciliation processes, drive process transformation and efficiency"
      },
      {
        "code": "3.6.2.11",
        "name": "Add support site investigation of mass balance gains/losses outside tolerance"
      }
    ],
    "3.7.1": [
      {
        "code": "3.7.1.1",
        "name": "Budget formulation and consolidation",
        "details": [
          "develop annual operating and capital budgets",
          "coordinate inputs from department and cost centers",
          "consolidate into enterprise-wide financial plans"
        ]
      },
      {
        "code": "3.7.1.2",
        "name": "Forecasting and scenario planning",
        "details": [
          "create rolling forecasts (monthly, quarterly)",
          "simulate financial outcomes under different business scenarios",
          "integrate macroeconomic, commodity and operational drivers"
        ]
      },
      {
        "code": "3.7.1.3",
        "name": "Long-range scenario planning",
        "details": [
          "develop multi-year projections (long-range plans) based on strategic initiatives, market trends and macroeconomic assumptions",
          "link financial forecasts to business strategy, investment roadmaps and transformation programs",
          "scenario simulation, base-case, worst-case outcomes to assess resilience and funding needs",
          "sensitivity analysis, test impact of key variables, e.g. energy prices, F(x) rates, demand shifts on long-term financial health"
        ]
      },
      {
        "code": "3.7.1.4",
        "name": "Cost center and functional budgeting",
        "details": [
          "allocate budgets to departments/functions",
          "track usage and variances at granular levels",
          "align with strategic and operational KPIs"
        ]
      },
      {
        "code": "3.7.1.5",
        "name": "Budget control and variance analysis",
        "details": [
          "monitor actual vs. budget",
          "investigate and explain deviations",
          "recommend corrective actions or re-forecasting"
        ]
      },
      {
        "code": "3.7.1.6",
        "name": "Budget Cycle Governance",
        "details": [
          "define calendar, milestones and approval workflows",
          "ensure compliance within internal control and audit requirements",
          "facilitate stakeholder reviews and sign-offs"
        ]
      },
      {
        "code": "3.7.1.7",
        "name": "Budgeting system and template management",
        "details": [
          "maintain budget tools",
          "design and update input templates",
          "train users and ensure data integrity"
        ]
      },
      {
        "code": "3.7.1.8",
        "name": "Strategic alignment and communication",
        "details": [
          "link budget to strategic initiatives and scorecards",
          "prepare executive summaries and board presentation",
          "translate financial plans into operational targets"
        ]
      },
      {
        "code": "3.7.1.9",
        "name": "Automate and digitize planning and budgeting processes, drive process transformation and efficiency"
      }
    ],
    "3.7.2": [
      {
        "code": "3.7.2.1",
        "name": "Periodic financial reporting",
        "details": [
          "prepare monthly, quarterly and year-to-date reports",
          "include P&L, balance sheet and cash flow summaries",
          "align with internal calendars and stakeholder expectations"
        ]
      },
      {
        "code": "3.7.2.2",
        "name": "Variance analysis and commentary",
        "details": [
          "compare actuals vs. budget/forecast",
          "provide root cause analysis and business commentary",
          "highlight risks, opportunities and corrective actions"
        ]
      },
      {
        "code": "3.7.2.3",
        "name": "KPI and performance dashboarding",
        "details": [
          "track operational and financial KPIs (e.g. EBITDA, ROIC, cost per unit)",
          "visualize trends and benchmarks across time and entities",
          "enable drill-downs by region, product or function"
        ]
      },
      {
        "code": "3.7.2.4",
        "name": "Segment and entity reporting",
        "details": [
          "generate reports by business unit, geography, product line or customer segment",
          "support internal management and external disclosures"
        ]
      },
      {
        "code": "3.7.2.5",
        "name": "Ad hoc and analytical reporting",
        "details": [
          "respond to on-demand requests from leadership or auditors",
          "perform deep dives into cost drivers, margin erosion or working capital"
        ]
      },
      {
        "code": "3.7.2.6",
        "name": "Report automation and governance",
        "details": [
          "maintain reporting templates or tools, e.g. Power BI, SAP BW, etc.",
          "ensure data integrity, version control and audit readiness",
          "define reporting standards and ownership across teams"
        ]
      }
    ],
    "3.7.3": [
      {
        "code": "3.7.3.1",
        "name": "Product profitability analysis",
        "details": [
          "calculate gross margin and contribution margin per product",
          "identify loss-making SKUs and pricing opportunities"
        ]
      },
      {
        "code": "3.7.3.2",
        "name": "Margin bridge and variance analysis",
        "details": [
          "track changes in margin over time",
          "explain drivers : price, volume, mix, cost, F(x), etc.",
          "support strategic pricing and sourcing decisions"
        ]
      },
      {
        "code": "3.7.3.3",
        "name": "Profitability forecasting and simulation",
        "details": [
          "model future profitability under different scenarios",
          "simulate impact of cost changes, pricing strategies or volume shifts"
        ]
      },
      {
        "code": "3.7.3.4",
        "name": "Profitability dashboards and reporting",
        "details": [
          "visualize profitability metrics across dimensions",
          "enable drill-downs by product, region or time period",
          "support executive and operational reviews"
        ]
      }
    ],
    "3.7.4": [
      {
        "code": "3.7.4.1",
        "name": "Capex planning and budgeting",
        "details": [
          "develop annual and multi-year expenditure plans",
          "align investment proposals with strategic priorities",
          "coordinate with business units for funding needs"
        ]
      },
      {
        "code": "3.7.4.2",
        "name": "Investment tracking and performance monitoring",
        "details": [
          "monitor actual vs. planned spend and timelines",
          "track project milestones, benefits realization and cost overruns",
          "flag delays, scope changes and reforecasting needs"
        ]
      },
      {
        "code": "3.7.4.3",
        "name": "Insurance",
        "details": [
          "support cost tracking, payments and accounting of insurance costs",
          "support annual program renewal process, collaborating with business units and functions in providing the necessary information to insurers so to ensure program remain robust to cover the business risk exposure",
          "support regular reporting to insurers, mainly for marine cargo and charterer's liability."
        ]
      }
    ],
    "4.1.1": [
      {
        "code": "4.1.1.1",
        "name": "Employee master data maintenance",
        "details": [
          "Create, update and validate employee records (e.g. personal info, job details, cost center, supervisor)"
        ]
      },
      {
        "code": "4.1.1.2",
        "name": "Position and organization structure management",
        "details": [
          "Maintain position hierarchies, reporting lines and organization units in HR system"
        ]
      },
      {
        "code": "4.1.1.3",
        "name": "Data quality and validation checks",
        "details": [
          "Run periodic audits to ensure accuracy, completeness and consistency across systems"
        ]
      },
      {
        "code": "4.1.1.4",
        "name": "Employee lifecycle event processing",
        "details": [
          "Manage data updates for hiring, transfers, promotions, terminations and retirements (hire to retire)"
        ]
      },
      {
        "code": "4.1.1.5",
        "name": "Document management and archiving",
        "details": [
          "Store and retrieve employee documents (contract, ID, certifications) per retention policies"
        ]
      },
      {
        "code": "4.1.1.6",
        "name": "Data privacy and consent management",
        "details": [
          "Ensure compliance of general and personal data protection and manage employee for data usage"
        ]
      },
      {
        "code": "4.1.1.7",
        "name": "Interface and integration monitoring",
        "details": [
          "Oversee data flows between HR system, payroll, finance and other 3rd party system"
        ]
      },
      {
        "code": "4.1.1.8",
        "name": "Employee self-service enablement",
        "details": [
          "Manage portal for personal data updates, document access and workflow initiation"
        ]
      },
      {
        "code": "4.1.1.9",
        "name": "Global mobility data handling",
        "details": [
          "Track expatriate assignments, visa status and cross-border data requirements"
        ]
      },
      {
        "code": "4.1.1.10",
        "name": "Reporting analysis, compliance and continuous improvement",
        "details": [
          "provide HC, attrition, workforce analytics using employee data",
          "compliance and audit, support internal/external audits with validated employee data and change logs",
          "automate and digitize employee data management processes, drive process transformation and efficiency"
        ]
      },
      {
        "code": "4.1.1.11",
        "name": "Employee queries data / call center",
        "details": [
          "e.g. insurance registration, pay slip issues, employment letter creation, etc."
        ]
      }
    ],
    "4.1.2": [
      {
        "code": "4.1.2.1",
        "name": "Job requisition",
        "details": [
          "Review completeness (after business unit's approval) in the alignment with organization structure and budget"
        ]
      },
      {
        "code": "4.1.2.2",
        "name": "Job description",
        "details": [
          "Define and standardize role and responsibilities, qualifications and job grading"
        ]
      },
      {
        "code": "4.1.2.3",
        "name": "Sourcing strategy and channel management (job board, referrals, social media, etc.)"
      },
      {
        "code": "4.1.2.4",
        "name": "Screening and shortlisting candidate",
        "details": [
          "Review CV and assess candidates"
        ]
      },
      {
        "code": "4.1.2.5",
        "name": "Schedule interview and manage logistics (virtual or on-site)"
      },
      {
        "code": "4.1.2.6",
        "name": "Facilitate soft and technical skill-set assessment until selection process (hiring decisions)"
      },
      {
        "code": "4.1.2.7",
        "name": "Offer letters, manage approvals and negotiate terms"
      },
      {
        "code": "4.1.2.8",
        "name": "Employee background verification (incl. medical screening)"
      },
      {
        "code": "4.1.2.9",
        "name": "Manage career sites"
      },
      {
        "code": "4.1.2.10",
        "name": "Manage internship (selection process to offering)"
      },
      {
        "code": "4.1.2.11",
        "name": "Reporting analysis, compliance and continuous improvement",
        "details": [
          "track time-to-fill, cost-per-hire and source effectiveness",
          "ensure recruitment practices comply with labor law and internal controls",
          "automate and digitize recruitment processes, drive process transformation and efficiency"
        ]
      },
      {
        "code": "4.1.2.12",
        "name": "New joiner announcement/email"
      }
    ],
    "4.1.3": [
      {
        "code": "4.1.3.1",
        "name": "Ensure personal data, banking details are accurate and up-to-date in HR system"
      },
      {
        "code": "4.1.3.2",
        "name": "Coordinate and communicate payroll cut-off date for data submission and approvals across functions"
      },
      {
        "code": "4.1.3.3",
        "name": "Manage data related to",
        "details": [
          "time and attendance (check-in/out, overtime, etc.)",
          "variable pay, e.g. bonuses, incentives, allowances",
          "statutory deduction (BPJS) and benefit (insurance), etc."
        ]
      },
      {
        "code": "4.1.3.4",
        "name": "Data upload and transfer/interface",
        "details": [
          "manage standardized template to upload payroll data",
          "monitor smooth interface between systems"
        ]
      },
      {
        "code": "4.1.3.5",
        "name": "Ensure data privacy and access control is well and strongly managed"
      },
      {
        "code": "4.1.3.6",
        "name": "Exception handling (missing, incorrect, late data) has to be done before payroll lock"
      },
      {
        "code": "4.1.3.7",
        "name": "Automate and digitize payroll data preparation processes, drive process transformation and efficiency"
      }
    ]
  },
  "people": [
    {
      "id": "tasha",
      "name": "Tasha Verlinden",
      "role": "Finance Specialist (AR)",
      "team": "Finance & Accounting · Order to Cash",
      "email": "tasha.verlinden@cass-example.co.id",
      "phone": "+62 21 5000 1201",
      "location": "Jakarta office, Level 12",
      "hours": "Mon–Fri, 08:00–17:00 WIB",
      "about": "Go-to person for LC review and clause questions."
    },
    {
      "id": "orin",
      "name": "Orin Salvatara",
      "role": "Credit Management Lead",
      "team": "Finance & Accounting · Order to Cash",
      "email": "orin.salvatara@cass-example.co.id",
      "phone": "+62 21 5000 1188",
      "location": "Jakarta office, Level 12",
      "hours": "Mon–Fri, 08:00–17:00 WIB",
      "about": "Owns credit policy, credit limits and the Credit Management pages."
    },
    {
      "id": "leona",
      "name": "Leona Branthwaite",
      "role": "F&A Tower Head",
      "team": "Finance & Accounting",
      "email": "leona.branthwaite@cass-example.co.id",
      "phone": "+62 21 5000 1100",
      "location": "Jakarta office, Level 12",
      "hours": "Mon–Fri, 08:00–17:00 WIB",
      "about": "Approves Finance & Accounting knowledge content."
    },
    {
      "id": "davin",
      "name": "Davin Ashgrove",
      "role": "CO Team Lead",
      "team": "Customer Operations · Customer Success",
      "email": "davin.ashgrove@cass-example.co.id",
      "phone": "+62 21 5000 1322",
      "location": "Jakarta office, Level 10",
      "hours": "Mon–Fri, 08:00–17:00 WIB",
      "about": "Contact for order fulfilment and billing questions."
    },
    {
      "id": "mirela",
      "name": "Mirela Tanbury",
      "role": "CO Tower Head",
      "team": "Customer Operations",
      "email": "mirela.tanbury@cass-example.co.id",
      "phone": "+62 21 5000 1300",
      "location": "Jakarta office, Level 10",
      "hours": "Mon–Fri, 08:00–17:00 WIB",
      "about": "Approves Customer Operations knowledge content."
    },
    {
      "id": "jules",
      "name": "Jules Pemberton",
      "role": "Process Excellence Analyst",
      "team": "Process Excellence",
      "email": "jules.pemberton@cass-example.co.id",
      "phone": "+62 21 5000 1450",
      "location": "Jakarta office, Level 11",
      "hours": "Mon–Fri, 08:00–17:00 WIB",
      "about": "Maintains the Knowledge Centre and its governance."
    }
  ],
  "itemTypes": [
    {
      "name": "Quick Reference Guide",
      "desc": "Checklists and job aids."
    },
    {
      "name": "SOP / DTP",
      "desc": "Controlled procedures and desktop procedures."
    },
    {
      "name": "Video",
      "desc": "Tutorials and knowledge-transfer recordings."
    },
    {
      "name": "Training Material",
      "desc": "Onboarding decks and learning packs."
    },
    {
      "name": "Templates & Forms",
      "desc": "Standard trackers and forms."
    },
    {
      "name": "Exception Handling",
      "desc": "Situation, complexity, action and who to escalate to."
    },
    {
      "name": "Lessons & Real Examples",
      "desc": "Past cases, what we changed, and worked anonymised examples."
    }
  ],
  "l2Pages": {
    "1.1.4": {
      "coverage": "partial",
      "status": "Draft",
      "owner": "davin",
      "expert": "davin",
      "approver": "mirela",
      "lastReviewed": "2026-10-08",
      "intro": "Order fulfilment, including shipping instructions extracted from SAP."
    },
    "1.1.5": {
      "coverage": "partial",
      "status": "Draft",
      "owner": "davin",
      "expert": "davin",
      "approver": "mirela",
      "lastReviewed": "2026-10-08",
      "intro": "Billing and invoicing, including proforma invoices extracted from SAP."
    },
    "3.1.1": {
      "coverage": "partial",
      "status": "Draft",
      "owner": "orin",
      "expert": "tasha",
      "approver": "leona",
      "lastReviewed": "2026-10-06",
      "intro": "Credit decisions for customers: risk assessment, payment method, credit limits and LC review. The LC review pilot is the first content here.",
      "steps": [
        {
          "id": "step-1",
          "name": "Customer Risk Assessment",
          "l3": "3.1.1.2",
          "who": [
            "Finance"
          ],
          "km": false
        },
        {
          "id": "step-2",
          "name": "Payment Method Decision",
          "l3": "3.1.1.3",
          "who": [
            "Finance"
          ],
          "km": false
        },
        {
          "id": "step-3",
          "name": "CIA / Credit Limit / LC",
          "l3": "3.1.1.4",
          "who": [
            "Finance"
          ],
          "km": false
        },
        {
          "id": "step-4",
          "name": "Payment Approval",
          "l3": "3.1.1.1",
          "who": [
            "Finance"
          ],
          "km": false
        },
        {
          "id": "step-5",
          "name": "LC Review & Consultation",
          "l3": "3.1.1.3",
          "who": [
            "CO",
            "Finance"
          ],
          "km": true
        },
        {
          "id": "step-6",
          "name": "Customer Negotiation",
          "l3": "",
          "who": [
            "CO"
          ],
          "km": false
        },
        {
          "id": "step-7",
          "name": "Shipment & Payment",
          "l3": "",
          "who": [
            "CO"
          ],
          "km": false
        }
      ]
    }
  },
  "items": [
    {
      "id": "lc-dtp",
      "title": "LC Review – Desktop Procedure",
      "type": "SOP / DTP",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-06",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.3",
      "link": "",
      "description": "Step-by-step LC clause review for CO and Finance, from draft LC received to confirmation or amendment request.",
      "duration": "",
      "requireAccess": true,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "lc-qrd",
      "title": "LC clause checklist (SWIFT MT700 fields)",
      "type": "Quick Reference Guide",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "In review",
      "updated": "2026-10-05",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.2",
      "link": "",
      "description": "One-page checklist of the MT700 fields to check: 44A/B/E/F shipment, 45A goods, 46A documents, 47A additional conditions, 48 presentation period, 71D charges.",
      "duration": "",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "lc-wiki-47a",
      "title": "Clause wiki: Additional Conditions (47A) · High",
      "type": "Training Material",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-02",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.2",
      "link": "",
      "description": "What to check in field 47A, common issues and typical resolution under UCP 600 and ISBP 745.",
      "duration": "",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "lc-wiki-71d",
      "title": "Clause wiki: Charges (71D) · High",
      "type": "Training Material",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-02",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.2",
      "link": "",
      "description": "How bank charges are split between applicant and beneficiary, and what to flag.",
      "duration": "",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "lc-flow",
      "title": "LC review workflow (CO and Finance swimlane)",
      "type": "Training Material",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Approved",
      "updated": "2026-09-30",
      "updatedBy": "jules",
      "owner": "jules",
      "escalateTo": "",
      "complexity": "",
      "version": "1.0",
      "link": "",
      "description": "Swimlane diagram of who does what from payment method decision to shipment and payment.",
      "duration": "",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE",
        "AMS"
      ]
    },
    {
      "id": "lc-ex-low",
      "title": "Charges split differs from contract terms",
      "type": "Exception Handling",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-07",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "tasha",
      "complexity": "Low",
      "version": "0.1",
      "link": "",
      "description": "The 71D charges split does not match the sales contract. Request an amendment through CO.",
      "duration": "",
      "requireAccess": true,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "lc-ex-med",
      "title": "Additional condition needs several review passes",
      "type": "Exception Handling",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-07",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "orin",
      "complexity": "Medium",
      "version": "0.1",
      "link": "",
      "description": "A 47A condition is unclear and needs more than one round between CO and Finance.",
      "duration": "",
      "requireAccess": true,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "lc-ll-ship",
      "title": "Shipment date extension during regional conflict",
      "type": "Lessons & Real Examples",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-09-29",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.1",
      "link": "",
      "description": "A conflict delayed vessels, so the latest shipment date was extended by LC amendment.",
      "duration": "",
      "requireAccess": true,
      "newBadge": "auto",
      "companies": [
        "APS"
      ]
    },
    {
      "id": "lc-real-47a",
      "title": "Non-documentary 47A condition disregarded (UCP 600 Art. 14(h))",
      "type": "Lessons & Real Examples",
      "l2": "3.1.1",
      "step": "LC Review & Consultation",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-03",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.1",
      "link": "",
      "description": "A 47A buyer-inspection condition with no matching document was treated as non-documentary.",
      "duration": "",
      "requireAccess": true,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE"
      ]
    },
    {
      "id": "cra-qrd",
      "title": "Customer risk assessment: key questions",
      "type": "Quick Reference Guide",
      "l2": "3.1.1",
      "step": "Customer Risk Assessment",
      "l3": "",
      "status": "Draft",
      "updated": "2026-09-26",
      "updatedBy": "tasha",
      "owner": "tasha",
      "escalateTo": "",
      "complexity": "",
      "version": "0.1",
      "link": "",
      "description": "Is the company financially stable, is the exposure acceptable, is there payment default risk?",
      "duration": "",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE",
        "AMS"
      ]
    },
    {
      "id": "pm-qrd",
      "title": "Payment method decision: Credit Limit, LC or CIA",
      "type": "Quick Reference Guide",
      "l2": "3.1.1",
      "step": "Payment Method Decision",
      "l3": "",
      "status": "Draft",
      "updated": "2026-09-26",
      "updatedBy": "orin",
      "owner": "orin",
      "escalateTo": "",
      "complexity": "",
      "version": "0.1",
      "link": "",
      "description": "How the risk assessment leads to a credit limit, an LC (or SBLC) or cash in advance.",
      "duration": "",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE",
        "AMS"
      ]
    },
    {
      "id": "sap-ship",
      "title": "Shipping instruction list (SAP video, 00:00–04:30)",
      "type": "Video",
      "l2": "1.1.4",
      "step": "",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-08",
      "updatedBy": "jules",
      "owner": "jules",
      "escalateTo": "",
      "complexity": "",
      "version": "0.1",
      "link": "",
      "description": "The part of the SAP tutorial that covers shipping instruction lists.",
      "duration": "04:30",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE",
        "AMS"
      ]
    },
    {
      "id": "sap-pi",
      "title": "Proforma invoice (SAP video, 04:30–09:10)",
      "type": "Video",
      "l2": "1.1.5",
      "step": "",
      "l3": "",
      "status": "Draft",
      "updated": "2026-10-08",
      "updatedBy": "jules",
      "owner": "jules",
      "escalateTo": "",
      "complexity": "",
      "version": "0.1",
      "link": "",
      "description": "The part of the SAP tutorial that covers proforma invoices.",
      "duration": "04:40",
      "requireAccess": false,
      "newBadge": "auto",
      "companies": [
        "APS",
        "ACE",
        "AMS"
      ]
    }
  ],
  "towerNames": {
    "1": "Customer Operations",
    "2": "Procurement",
    "3": "Finance & Accounting",
    "4": "Human Resources"
  },
  "glossary": [
    {
      "term": "A/R",
      "meaning": "Accounts Receivable: money that customers owe the company.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "ACE",
      "meaning": "A group company supported by CASS. Full name to be added.",
      "towers": []
    },
    {
      "term": "AMS",
      "meaning": "A group company supported by CASS. Full name to be added.",
      "towers": []
    },
    {
      "term": "AP",
      "meaning": "Accounts Payable: money the company owes its vendors.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "APS",
      "meaning": "A group company supported by CASS. Full name to be added.",
      "towers": []
    },
    {
      "term": "ASM",
      "meaning": "Authorized Signature Matrix: who is allowed to approve what.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "BG",
      "meaning": "Bank Guarantee: a bank’s promise to pay if the applicant fails to meet an obligation.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "BPJS",
      "meaning": "Indonesia’s social security and health insurance agency, used in payroll.",
      "towers": [
        "4"
      ]
    },
    {
      "term": "CbCR",
      "meaning": "Country-by-Country Reporting: reporting a group’s income and tax paid in each country.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "CCS",
      "meaning": "",
      "towers": [
        "1"
      ]
    },
    {
      "term": "CIA",
      "meaning": "Cash in Advance: the buyer pays before shipment.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "CIT",
      "meaning": "Corporate Income Tax.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "CO",
      "meaning": "Customer Operations.",
      "towers": [
        "1"
      ]
    },
    {
      "term": "CoA",
      "meaning": "Chart of Accounts: the list of accounts used to record transactions.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "CPF",
      "meaning": "Central Provident Fund (Singapore): a mandatory retirement savings scheme handled in payroll.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "CV",
      "meaning": "Curriculum Vitae: a candidate’s résumé.",
      "towers": [
        "4"
      ]
    },
    {
      "term": "DTP",
      "meaning": "Desktop Procedure: step-by-step instructions for one task.",
      "towers": [
        "all"
      ]
    },
    {
      "term": "EBITDA",
      "meaning": "Earnings Before Interest, Taxes, Depreciation and Amortisation.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "ERA",
      "meaning": "Energy Risk Accounting.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "ERP",
      "meaning": "Enterprise Resource Planning: the core business system.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "F&A",
      "meaning": "Finance & Accounting.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "F(x) / FX",
      "meaning": "Foreign exchange.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "FP&A",
      "meaning": "Financial Planning & Analysis.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "GAAP",
      "meaning": "Generally Accepted Accounting Principles.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "GL",
      "meaning": "General Ledger: the main accounting record.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "GR",
      "meaning": "Goods Receipt: confirmation that goods or services were received.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "GST / VAT",
      "meaning": "Goods and Services Tax / Value Added Tax.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "HR",
      "meaning": "Human Resources.",
      "towers": [
        "4"
      ]
    },
    {
      "term": "ICC",
      "meaning": "International Chamber of Commerce.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "IFRS",
      "meaning": "International Financial Reporting Standards.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "ISBP 745",
      "meaning": "ICC guidance on how LC documents are examined.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "KM",
      "meaning": "Knowledge Management.",
      "towers": [
        "all"
      ]
    },
    {
      "term": "KPI",
      "meaning": "Key Performance Indicator: a measure of how well a process performs.",
      "towers": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "term": "KYC",
      "meaning": "Know Your Customer: identity and background checks, for example by a bank.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "L0 / L1 / L2 / L3",
      "meaning": "Levels of the service taxonomy: tower, process, service, function.",
      "towers": [
        "all"
      ]
    },
    {
      "term": "LC",
      "meaning": "Letter of Credit: a bank’s promise to pay the seller if the documents match the LC terms.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "LOI",
      "meaning": "Letter of Indemnity.",
      "towers": [
        "1"
      ]
    },
    {
      "term": "M&A",
      "meaning": "Mergers and Acquisitions.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "MT700",
      "meaning": "The SWIFT message a bank uses to issue a letter of credit.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "NRV",
      "meaning": "",
      "towers": [
        "1"
      ]
    },
    {
      "term": "O2C",
      "meaning": "Order to Cash: the process from a customer order to receiving the payment.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "P&L",
      "meaning": "Profit and Loss statement.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "P2P",
      "meaning": "Purchase to Pay: the process from buying to paying the vendor.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "PIC",
      "meaning": "Person in charge of providing and maintaining content.",
      "towers": [
        "all"
      ]
    },
    {
      "term": "PO",
      "meaning": "Purchase Order.",
      "towers": [
        "2",
        "3"
      ]
    },
    {
      "term": "PSAK",
      "meaning": "Pernyataan Standar Akuntansi Keuangan: Indonesian financial accounting standards.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "PTA",
      "meaning": "Project Turnaround.",
      "towers": [
        "2"
      ]
    },
    {
      "term": "QRD",
      "meaning": "Quick Reference Guide: a checklist or job aid.",
      "towers": [
        "all"
      ]
    },
    {
      "term": "R2R",
      "meaning": "Record to Report: the process from recording transactions to financial reporting.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "RFI",
      "meaning": "Request for Information.",
      "towers": [
        "2"
      ]
    },
    {
      "term": "RFQ / RFP",
      "meaning": "Request for Quotation / Request for Proposal.",
      "towers": [
        "2"
      ]
    },
    {
      "term": "ROIC",
      "meaning": "Return on Invested Capital.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "RTP",
      "meaning": "Request to Purchase.",
      "towers": [
        "2"
      ]
    },
    {
      "term": "S2C",
      "meaning": "Source to Contract.",
      "towers": [
        "2"
      ]
    },
    {
      "term": "S2P",
      "meaning": "Source to Pay.",
      "towers": [
        "2"
      ]
    },
    {
      "term": "SBLC",
      "meaning": "Standby Letter of Credit: a backup payment guarantee, used if the buyer fails to pay.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "SLA",
      "meaning": "Service Level Agreement: the agreed time or quality a service must meet.",
      "towers": [
        "2",
        "3"
      ]
    },
    {
      "term": "SO",
      "meaning": "Sales Order.",
      "towers": [
        "1"
      ]
    },
    {
      "term": "SOP",
      "meaning": "Standard Operating Procedure.",
      "towers": [
        "all"
      ]
    },
    {
      "term": "SOX",
      "meaning": "Sarbanes-Oxley Act: US law on financial reporting and internal controls.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "T&E",
      "meaning": "Travel & Entertainment.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "TMS",
      "meaning": "Treasury Management System.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "UCP 600",
      "meaning": "The ICC rules that govern documentary credits.",
      "towers": [
        "1",
        "3"
      ]
    },
    {
      "term": "VPO",
      "meaning": "",
      "towers": [
        "3"
      ]
    },
    {
      "term": "WHT",
      "meaning": "Withholding Tax.",
      "towers": [
        "3"
      ]
    },
    {
      "term": "WMS",
      "meaning": "Warehouse Management System.",
      "towers": [
        "3"
      ]
    }
  ],
  "synonyms": {
    "lc": [
      "letter of credit"
    ],
    "letter of credit": [
      "lc"
    ],
    "sblc": [
      "standby"
    ],
    "ar": [
      "account receivables"
    ],
    "account receivables": [
      "ar"
    ],
    "ap": [
      "invoice",
      "payment",
      "purchase to pay"
    ],
    "po": [
      "purchase order"
    ],
    "purchase order": [
      "po"
    ],
    "gl": [
      "general ledger"
    ],
    "coa": [
      "chart of accounts"
    ],
    "hr": [
      "human resources"
    ],
    "co": [
      "customer operations"
    ],
    "cia": [
      "cash in advance"
    ],
    "proforma": [
      "invoice"
    ],
    "pi": [
      "invoice"
    ],
    "vat": [
      "tax"
    ],
    "gst": [
      "tax"
    ],
    "kpi": [
      "sla"
    ],
    "sla": [
      "kpi"
    ],
    "p2p": [
      "purchase to pay"
    ],
    "o2c": [
      "order to cash"
    ],
    "r2r": [
      "record to report"
    ],
    "payroll": [
      "bpjs"
    ],
    "bpjs": [
      "payroll"
    ],
    "vendor": [
      "supplier"
    ],
    "supplier": [
      "vendor"
    ],
    "customer": [
      "client"
    ],
    "client": [
      "customer"
    ]
  },
  "popularSearches": [
    "letter of credit",
    "credit limit",
    "proforma invoice",
    "vendor",
    "payroll",
    "shipping instruction"
  ],
  "academy": {
    "settings": {
      "lockWeeksInOrder": true,
      "lockAfterCheckpoint": true,
      "passMark": 70,
      "requirePassToUnlockNextWeek": false,
      "format": "multiple choice (format still to be decided)",
      "finalRecentWeeks": [
        9,
        10,
        11,
        12
      ],
      "finalRecentShare": 0.6
    },
    "towers": [
      {
        "name": "Finance & Accounting",
        "code": "3",
        "desc": "Credit, receivables, payables, record to report, tax, treasury and planning.",
        "links": {
          "2": [
            {
              "title": "3.1 Order to Cash",
              "href": "index.html#l2-3.1.1"
            },
            {
              "title": "3.1.1 Credit Management",
              "href": "index.html#l2-3.1.1"
            },
            {
              "title": "3.2 Purchase to Pay",
              "href": "index.html#l2-3.2.1"
            }
          ],
          "3": [
            {
              "title": "LC review process map",
              "href": "index.html#l2-3.1.1/step-5"
            },
            {
              "title": "Invoice Receiving",
              "href": "index.html#l2-3.2.1"
            }
          ],
          "5": [
            {
              "title": "Credit decision walkthrough",
              "href": "index.html#l2-3.1.1/step-1"
            }
          ],
          "7": [
            {
              "title": "LC clause checklist",
              "href": "index.html#item-lc-qrd"
            },
            {
              "title": "Account Receivables",
              "href": "index.html#l2-3.1.2"
            }
          ],
          "8": [
            {
              "title": "LC exception handling",
              "href": "index.html#l2-3.1.1/step-5"
            }
          ],
          "9": [
            {
              "title": "LC review & consultation",
              "href": "index.html#l2-3.1.1/step-5"
            }
          ],
          "11": [
            {
              "title": "Credit Management scenario",
              "href": "index.html#l2-3.1.1"
            }
          ]
        }
      },
      {
        "name": "Customer Operations",
        "code": "1",
        "desc": "Customer data, contracts, orders, billing and collections.",
        "links": {
          "2": [
            {
              "title": "1.1 Customer Success",
              "href": "index.html#l2-1.1.3"
            },
            {
              "title": "Supporting activities & reporting",
              "href": "index.html#l2-1.1.9"
            }
          ],
          "3": [
            {
              "title": "Capture & Monitor Orders",
              "href": "index.html#l2-1.1.3"
            },
            {
              "title": "Fulfil Orders",
              "href": "index.html#l2-1.1.4"
            }
          ],
          "5": [
            {
              "title": "Fulfil Orders walkthrough",
              "href": "index.html#l2-1.1.4"
            }
          ],
          "7": [
            {
              "title": "Proforma invoice",
              "href": "index.html#l2-1.1.5"
            },
            {
              "title": "Shipping instructions",
              "href": "index.html#l2-1.1.4"
            }
          ],
          "8": [
            {
              "title": "LC review with Finance",
              "href": "index.html#l2-3.1.1/step-5"
            },
            {
              "title": "Collection Management",
              "href": "index.html#l2-1.1.6"
            }
          ],
          "9": [
            {
              "title": "Billing & Invoicing",
              "href": "index.html#l2-1.1.5"
            }
          ],
          "11": [
            {
              "title": "Order-to-delivery scenario",
              "href": "index.html#l2-1.1.4"
            }
          ]
        }
      },
      {
        "name": "Procurement",
        "code": "2",
        "desc": "Procurement operations and commercial operations (S2C).",
        "links": {
          "2": [
            {
              "title": "2.1 Procurement Operations",
              "href": "index.html#l2-2.1.4"
            },
            {
              "title": "2.2 Commercial Operations (S2C)",
              "href": "index.html#l2-2.2.1"
            }
          ],
          "3": [
            {
              "title": "Request to Purchase",
              "href": "index.html#l2-2.1.4"
            }
          ],
          "5": [
            {
              "title": "Spot Buy walkthrough",
              "href": "index.html#l2-2.1.7"
            }
          ],
          "7": [
            {
              "title": "Vendor Data Management",
              "href": "index.html#l2-2.1.1"
            }
          ],
          "8": [
            {
              "title": "Outline Agreement Management",
              "href": "index.html#l2-2.1.3"
            }
          ],
          "9": [
            {
              "title": "Request to Purchase",
              "href": "index.html#l2-2.1.4"
            }
          ],
          "11": [
            {
              "title": "Sourcing scenario",
              "href": "index.html#l2-2.2.2"
            }
          ]
        }
      },
      {
        "name": "Human Resources",
        "code": "4",
        "desc": "Employee data, recruitment and payroll data preparation.",
        "links": {
          "2": [
            {
              "title": "4.1 Human Resources Operations",
              "href": "index.html#l2-4.1.1"
            }
          ],
          "3": [
            {
              "title": "Employee Data Management",
              "href": "index.html#l2-4.1.1"
            }
          ],
          "5": [
            {
              "title": "Recruitment walkthrough",
              "href": "index.html#l2-4.1.2"
            }
          ],
          "7": [
            {
              "title": "Payroll data preparation",
              "href": "index.html#l2-4.1.3"
            }
          ],
          "8": [
            {
              "title": "Employee data exceptions",
              "href": "index.html#l2-4.1.1"
            }
          ],
          "9": [
            {
              "title": "Recruitment",
              "href": "index.html#l2-4.1.2"
            }
          ],
          "11": [
            {
              "title": "Payroll scenario",
              "href": "index.html#l2-4.1.3"
            }
          ]
        }
      }
    ],
    "weeks": [
      {
        "n": 1,
        "title": "Welcome to CASS",
        "desc": "Orientation, CASS overview, values and team introductions.",
        "hours": "2 h"
      },
      {
        "n": 2,
        "title": "Service taxonomy",
        "desc": "Explore your tower’s L0, L1 and L2 services.",
        "hours": "1.5 h"
      },
      {
        "n": 3,
        "title": "Process & documentation",
        "desc": "Open a process map, an SOP and a quick reference guide.",
        "hours": "2 h"
      },
      {
        "n": 4,
        "title": "Tools & ways of working",
        "desc": "System access, Microsoft Loop basics, who to contact and how to escalate.",
        "hours": "2 h"
      },
      {
        "n": 5,
        "title": "Guided walkthrough",
        "desc": "Follow one process end to end, using the linked pages.",
        "hours": "3 h"
      },
      {
        "n": 6,
        "title": "Shadowing",
        "desc": "Observe live work and write down your questions.",
        "hours": "4 h"
      },
      {
        "n": 7,
        "title": "Supported practice",
        "desc": "Do selected steps using the SOP and quick reference guide.",
        "hours": "4 h"
      },
      {
        "n": 8,
        "title": "Exception handling",
        "desc": "Controls, escalation and recovery when things go wrong.",
        "hours": "2 h"
      },
      {
        "n": 9,
        "title": "Supervised execution",
        "desc": "Complete selected process steps with review.",
        "hours": "5 h"
      },
      {
        "n": 10,
        "title": "Quality & KPI awareness",
        "desc": "Understand controls, SLAs and what good looks like.",
        "hours": "1.5 h"
      },
      {
        "n": 11,
        "title": "Independent scenario",
        "desc": "Find and use the right knowledge source on your own.",
        "hours": "3 h"
      },
      {
        "n": 12,
        "title": "Readiness reflection",
        "desc": "Summarise what you learned and where you need support.",
        "hours": "1 h"
      }
    ],
    "weekContent": {
      "1": {
        "goals": [
          "Understand what CASS does and how the four towers fit together",
          "Know who to ask and where to find help",
          "Learn the Knowledge Centre basics: search, taxonomy and glossary"
        ],
        "materials": [
          {
            "id": "w1-m1",
            "type": "Training Material",
            "title": "CASS overview and structure",
            "time": "20 min",
            "desc": "How CASS supports the group companies and what each tower does.",
            "href": "",
            "tba": false
          },
          {
            "id": "w1-m2",
            "type": "Training Material",
            "title": "Values and ways of working",
            "time": "15 min",
            "desc": "The values and working norms you will see every day.",
            "href": "",
            "tba": false
          },
          {
            "id": "w1-m3",
            "type": "Video",
            "title": "Welcome and team introductions",
            "time": "10 min",
            "desc": "A short welcome from the tower heads.",
            "href": "",
            "tba": false
          },
          {
            "id": "w1-m4",
            "type": "Quick Reference Guide",
            "title": "Knowledge Centre in 5 minutes",
            "time": "10 min",
            "desc": "Search, browse the taxonomy and read the status labels.",
            "href": "index.html",
            "tba": false
          },
          {
            "id": "w1-m5",
            "type": "Glossary",
            "title": "CASS terms and acronyms",
            "time": "10 min",
            "desc": "Look up acronyms and filter them by your tower.",
            "href": "index.html#glossary",
            "tba": false
          }
        ]
      },
      "2": {
        "goals": [
          "Read the service taxonomy from L0 tower down to L3 function",
          "Find your tower’s L2 services and see their status"
        ],
        "materials": [
          {
            "id": "w2-m1",
            "type": "Quick Reference Guide",
            "title": "How the service taxonomy works (L0 to L3)",
            "time": "10 min",
            "desc": "What each level means and how to use the sidebar.",
            "href": "",
            "tba": false
          },
          {
            "id": "w2-m2",
            "type": "Training Material",
            "title": "Walk through your tower’s services",
            "time": "40 min",
            "desc": "Open each L2 service in your tower and read its intro.",
            "href": "",
            "tba": false
          }
        ]
      },
      "3": {
        "goals": [
          "Open a process map and follow its steps",
          "Find the SOP, quick reference guide and templates for a step"
        ],
        "materials": [
          {
            "id": "w3-m1",
            "type": "Quick Reference Guide",
            "title": "How to read a process map",
            "time": "10 min",
            "desc": "Steps, role tags and the highlighted pilot step.",
            "href": "",
            "tba": false
          },
          {
            "id": "w3-m2",
            "type": "Training Material",
            "title": "SOP, DTP and quick reference guide: what is the difference?",
            "time": "15 min",
            "desc": "When to use each type of document.",
            "href": "",
            "tba": false
          }
        ]
      },
      "4": {
        "goals": [
          "Request the systems access you need",
          "Know who to contact and how to escalate",
          "Get started with Microsoft Loop"
        ],
        "materials": [
          {
            "id": "w4-m1",
            "type": "Quick Reference Guide",
            "title": "Access request guide",
            "time": "15 min",
            "desc": "How to request systems access for your role.",
            "href": "",
            "tba": true
          },
          {
            "id": "w4-m2",
            "type": "Quick Reference Guide",
            "title": "Contacts and escalation",
            "time": "10 min",
            "desc": "Who to contact for what, and how to escalate.",
            "href": "",
            "tba": true
          },
          {
            "id": "w4-m3",
            "type": "Training Material",
            "title": "Microsoft Loop basics",
            "time": "30 min",
            "desc": "Pages, components and how the Knowledge Centre links to them.",
            "href": "",
            "tba": true
          }
        ]
      },
      "5": {
        "goals": [
          "Follow one process end to end using the linked pages",
          "Write down the questions the pages do not answer"
        ],
        "materials": [
          {
            "id": "w5-m1",
            "type": "Training Material",
            "title": "Guided walkthrough: following a process end to end",
            "time": "30 min",
            "desc": "A worked example from first step to last.",
            "href": "",
            "tba": false
          },
          {
            "id": "w5-m2",
            "type": "Templates & Forms",
            "title": "Walkthrough notes template",
            "time": "10 min",
            "desc": "A page to record questions and open points.",
            "href": "",
            "tba": false
          }
        ]
      },
      "6": {
        "goals": [
          "Observe live work in your team",
          "Note down questions and any difference from the SOP"
        ],
        "materials": [
          {
            "id": "w6-m1",
            "type": "Templates & Forms",
            "title": "Shadowing question log",
            "time": "10 min",
            "desc": "A simple log of what you saw and what you want to ask.",
            "href": "",
            "tba": false
          },
          {
            "id": "w6-m2",
            "type": "Quick Reference Guide",
            "title": "Shadowing: do’s and don’ts",
            "time": "10 min",
            "desc": "How to observe without disturbing live work.",
            "href": "",
            "tba": false
          }
        ]
      },
      "7": {
        "goals": [
          "Do selected steps with the SOP and quick reference guide",
          "Ask for feedback after each step"
        ],
        "materials": [
          {
            "id": "w7-m1",
            "type": "SOP / DTP",
            "title": "Using an SOP step by step",
            "time": "15 min",
            "desc": "How to follow a desktop procedure and where to note issues.",
            "href": "",
            "tba": false
          },
          {
            "id": "w7-m2",
            "type": "Quick Reference Guide",
            "title": "Practice checklist",
            "time": "10 min",
            "desc": "A checklist to use while you practise.",
            "href": "",
            "tba": false
          }
        ]
      },
      "8": {
        "goals": [
          "Recognise an exception and its complexity",
          "Know who to escalate to"
        ],
        "materials": [
          {
            "id": "w8-m1",
            "type": "Exception Handling",
            "title": "How to read an exception item",
            "time": "15 min",
            "desc": "Situation, complexity, action and who to escalate to.",
            "href": "",
            "tba": false
          },
          {
            "id": "w8-m2",
            "type": "Quick Reference Guide",
            "title": "Escalation contacts",
            "time": "10 min",
            "desc": "The contact for each situation.",
            "href": "",
            "tba": true
          }
        ]
      },
      "9": {
        "goals": [
          "Complete selected process steps with review",
          "Use Knowledge Centre items as you work"
        ],
        "materials": [
          {
            "id": "w9-m1",
            "type": "Training Material",
            "title": "Supervised execution: what to expect",
            "time": "15 min",
            "desc": "How reviews work and how to use the feedback.",
            "href": "",
            "tba": false
          },
          {
            "id": "w9-m2",
            "type": "Templates & Forms",
            "title": "Review feedback form",
            "time": "10 min",
            "desc": "Record the reviewer’s feedback on each step.",
            "href": "",
            "tba": false
          }
        ]
      },
      "10": {
        "goals": [
          "Understand the controls, SLAs and KPIs for your tower",
          "Know what good looks like"
        ],
        "materials": [
          {
            "id": "w10-m1",
            "type": "Training Material",
            "title": "Controls, SLAs and KPIs at CASS",
            "time": "25 min",
            "desc": "The measures your team is held to and why.",
            "href": "",
            "tba": false
          },
          {
            "id": "w10-m2",
            "type": "Quick Reference Guide",
            "title": "Quality checklist",
            "time": "10 min",
            "desc": "A self-check before you hand work on.",
            "href": "",
            "tba": false
          }
        ]
      },
      "11": {
        "goals": [
          "Find and use the right knowledge source on your own",
          "Complete a scenario from start to finish"
        ],
        "materials": [
          {
            "id": "w11-m1",
            "type": "Training Material",
            "title": "Independent scenario brief",
            "time": "20 min",
            "desc": "The scenario, the expected outcome and how it is reviewed.",
            "href": "",
            "tba": false
          },
          {
            "id": "w11-m2",
            "type": "Quick Reference Guide",
            "title": "Where to look: a decision guide",
            "time": "10 min",
            "desc": "Which source to use for which kind of question.",
            "href": "",
            "tba": false
          }
        ]
      },
      "12": {
        "goals": [
          "Summarise what you have learned",
          "Name where you still need support"
        ],
        "materials": [
          {
            "id": "w12-m1",
            "type": "Templates & Forms",
            "title": "Readiness reflection template",
            "time": "20 min",
            "desc": "A short template to write down what you can do alone and what you still need.",
            "href": "",
            "tba": false
          },
          {
            "id": "w12-m2",
            "type": "Training Material",
            "title": "Preparing for your checkpoint reviews",
            "time": "15 min",
            "desc": "What to revisit before Checkpoint 3 and the Final checkpoint.",
            "href": "",
            "tba": false
          }
        ]
      }
    },
    "tests": [
      {
        "id": "cp1",
        "title": "Checkpoint 1",
        "covers": "Weeks 1–4",
        "weeks": [
          1,
          2,
          3,
          4
        ],
        "after": 4,
        "needs": "",
        "count": 6
      },
      {
        "id": "cp2",
        "title": "Checkpoint 2",
        "covers": "Weeks 5–8",
        "weeks": [
          5,
          6,
          7,
          8
        ],
        "after": 8,
        "needs": "",
        "count": 8
      },
      {
        "id": "cp3",
        "title": "Checkpoint 3",
        "covers": "Weeks 9–12",
        "weeks": [
          9,
          10,
          11,
          12
        ],
        "after": 12,
        "needs": "",
        "count": 8
      },
      {
        "id": "final",
        "title": "Final checkpoint",
        "covers": "Weeks 1–12, with extra weight on weeks 9–12",
        "weeks": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12
        ],
        "after": 12,
        "needs": "cp3",
        "count": 10
      }
    ],
    "questions": [
      {
        "id": "g1",
        "tower": "All",
        "week": 1,
        "qtype": "Multiple choice",
        "q": "Where do you find the meaning of an abbreviation such as LC or SBLC?",
        "o": [
          "The Glossary in the Knowledge Centre",
          "The search results only",
          "Ask HR"
        ],
        "a": 0,
        "why": "The Glossary lists the common terms and abbreviations."
      },
      {
        "id": "g2",
        "tower": "All",
        "week": 2,
        "qtype": "Multiple choice",
        "q": "In the service taxonomy, what is an L2?",
        "o": [
          "A tower such as Finance & Accounting",
          "A process area such as Order to Cash",
          "A specific service such as Credit Management"
        ],
        "a": 2,
        "why": "L0 is the tower, L1 the process, L2 the service and L3 the function."
      },
      {
        "id": "g3",
        "tower": "All",
        "week": 2,
        "qtype": "Multiple choice",
        "q": "What does the coloured dot next to a service in the taxonomy show?",
        "o": [
          "How much content is available for it",
          "Who is online",
          "The priority of the service"
        ],
        "a": 0,
        "why": "Covered, Partial or Not started describes how much knowledge content exists."
      },
      {
        "id": "g4",
        "tower": "All",
        "week": 3,
        "qtype": "Multiple choice",
        "q": "Where do you see who owns a Knowledge Centre page?",
        "o": [
          "The “Page owner” field at the top of the page",
          "The search results",
          "Ask HR"
        ],
        "a": 0,
        "why": "Page owner, Ask the expert and Approved by are shown at the top of each service page."
      },
      {
        "id": "g5",
        "tower": "All",
        "week": 4,
        "qtype": "Multiple choice",
        "q": "A document is marked “Require access”. What does that mean?",
        "o": [
          "You need permission before you can open it",
          "It is out of date",
          "It is a draft"
        ],
        "a": 0,
        "why": "Require access means the content is restricted. Follow the access request steps."
      },
      {
        "id": "g6",
        "tower": "All",
        "week": 4,
        "qtype": "Multiple choice",
        "q": "Who do you contact when a Knowledge Centre page looks wrong or outdated?",
        "o": [
          "Use “Suggest an edit” or contact the page owner",
          "Edit the page yourself",
          "Ignore it"
        ],
        "a": 0,
        "why": "Readers do not edit content. The page owner and the admin team keep it correct."
      },
      {
        "id": "g7",
        "tower": "All",
        "week": 6,
        "qtype": "Multiple choice",
        "q": "What is the best use of shadowing time?",
        "o": [
          "Observe live work and note down questions",
          "Fix problems in the live process",
          "Skip it if the SOP is clear"
        ],
        "a": 0,
        "why": "Shadowing is for observing and collecting questions."
      },
      {
        "id": "g8",
        "tower": "All",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "You hit a problem a process step does not cover. What do you check first?",
        "o": [
          "Exception Handling for that step, then the “Escalate to” contact",
          "The glossary",
          "Restart the process"
        ],
        "a": 0,
        "why": "Exception Handling lists the situation, the action and who to escalate to."
      },
      {
        "id": "g9",
        "tower": "All",
        "week": 10,
        "qtype": "Multiple choice",
        "q": "Why do SLAs and KPIs matter in day-to-day work?",
        "o": [
          "They show what good looks like and when to escalate",
          "They are only for managers",
          "They replace the SOP"
        ],
        "a": 0,
        "why": "They set the expected quality and timing."
      },
      {
        "id": "g10",
        "tower": "All",
        "week": 12,
        "qtype": "Multiple choice",
        "q": "What should you do when you still need support after week 12?",
        "o": [
          "Tell your manager and use the Knowledge Centre to find the right contact",
          "Wait for the probation review",
          "Stop using the Knowledge Centre"
        ],
        "a": 0,
        "why": "Raise gaps early and use the Ask the expert contact on the page."
      },
      {
        "id": "f1",
        "tower": "Finance & Accounting",
        "week": 3,
        "qtype": "Multiple choice",
        "q": "Which Knowledge Centre page holds the LC review pilot content?",
        "o": [
          "3.1.1 Credit Management",
          "3.2.1 Invoice Receiving",
          "3.4.1 Tax Data Management"
        ],
        "a": 0,
        "why": "The LC review pilot sits under 3.1.1 Credit Management."
      },
      {
        "id": "f2",
        "tower": "Finance & Accounting",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "An LC charges split (field 71D) differs from the sales contract. What is the first step?",
        "o": [
          "Request an amendment through Customer Operations",
          "Ignore it",
          "Pay the charges and report later"
        ],
        "a": 0,
        "why": "See the exception handling item for the charges split."
      },
      {
        "id": "f3",
        "tower": "Finance & Accounting",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which LC field covers additional conditions?",
        "o": [
          "47A",
          "44C",
          "71D"
        ],
        "a": 0,
        "why": "47A is Additional Conditions. 71D is Charges."
      },
      {
        "id": "f4",
        "tower": "Finance & Accounting",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which two teams work together in the LC review and consultation step?",
        "o": [
          "Customer Operations and Finance",
          "Procurement and HR",
          "Treasury and Tax only"
        ],
        "a": 0,
        "why": "CO and Finance share this step in the workflow."
      },
      {
        "id": "f5",
        "tower": "Finance & Accounting",
        "week": 11,
        "qtype": "Multiple choice",
        "q": "The payment method decision can lead to which outcome?",
        "o": [
          "Credit limit, LC or cash in advance",
          "Only an LC",
          "Only a credit limit"
        ],
        "a": 0,
        "why": "The risk assessment leads to a credit limit, an LC (or SBLC) or CIA."
      },
      {
        "id": "c1",
        "tower": "Customer Operations",
        "week": 3,
        "qtype": "Multiple choice",
        "q": "Which L2 service covers shipping the order?",
        "o": [
          "1.1.4 Fulfil Orders",
          "1.1.6 Collection Management",
          "1.1.8 Freight Invoice"
        ],
        "a": 0,
        "why": "Fulfil Orders includes processing and shipping the order."
      },
      {
        "id": "c2",
        "tower": "Customer Operations",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "Who do you involve when an LC clause needs review?",
        "o": [
          "Finance, through the LC review process",
          "Procurement",
          "HR"
        ],
        "a": 0,
        "why": "LC review and consultation is shared between CO and Finance."
      },
      {
        "id": "c3",
        "tower": "Customer Operations",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which L2 service covers proforma invoices?",
        "o": [
          "1.1.5 Billing & Invoicing",
          "1.1.3 Capture & Monitor Orders",
          "1.1.7 Customer Satisfaction"
        ],
        "a": 0,
        "why": "Billing & Invoicing includes creating and releasing invoices."
      },
      {
        "id": "c4",
        "tower": "Customer Operations",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Where do you find follow-up steps for overdue payments?",
        "o": [
          "1.1.6 Collection Management",
          "1.1.2 Contract Management",
          "1.1.1 Customer Data Management"
        ],
        "a": 0,
        "why": "Collection Management covers overdue payments."
      },
      {
        "id": "c5",
        "tower": "Customer Operations",
        "week": 11,
        "qtype": "Multiple choice",
        "q": "A customer order is delayed. Where do you start looking for guidance?",
        "o": [
          "The Fulfil Orders page and its exception handling",
          "The Tax pages",
          "The Glossary only"
        ],
        "a": 0,
        "why": "Start from the service page that matches the process step."
      },
      {
        "id": "p1",
        "tower": "Procurement",
        "week": 3,
        "qtype": "Multiple choice",
        "q": "Which L2 service covers Request to Purchase?",
        "o": [
          "2.1.4 Request to Purchase (RTP)",
          "2.1.7 Spot Buy",
          "2.2.1 Contract Management"
        ],
        "a": 0,
        "why": "2.1.4 is Request to Purchase."
      },
      {
        "id": "p2",
        "tower": "Procurement",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "Where are agreements with vendors managed?",
        "o": [
          "2.1.3 Outline Agreement Management",
          "2.1.5 Inventory Management",
          "2.1.6 Project Turnaround"
        ],
        "a": 0,
        "why": "Outline agreements sit under 2.1.3."
      },
      {
        "id": "p3",
        "tower": "Procurement",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which service covers one-off purchases?",
        "o": [
          "2.1.7 Spot Buy",
          "2.2.2 Strategic / Agile Sourcing",
          "2.1.2 Material Master"
        ],
        "a": 0,
        "why": "Spot Buy covers one-off purchases."
      },
      {
        "id": "p4",
        "tower": "Procurement",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which L2 service covers vendor master data for purchase orders?",
        "o": [
          "2.1.1 Vendor Data Management (PO)",
          "2.1.3 Outline Agreement Management",
          "2.2.1 Contract Management"
        ],
        "a": 0,
        "why": "Vendor data for PO sits under 2.1.1."
      },
      {
        "id": "p5",
        "tower": "Procurement",
        "week": 11,
        "qtype": "Multiple choice",
        "q": "You need to run a sourcing event. Where do you start?",
        "o": [
          "2.2.2 Strategic / Agile Sourcing",
          "2.1.5 Inventory Management",
          "The Glossary only"
        ],
        "a": 0,
        "why": "Sourcing activities sit under 2.2.2."
      },
      {
        "id": "h1",
        "tower": "Human Resources",
        "week": 3,
        "qtype": "Multiple choice",
        "q": "Which L2 service covers employee master data?",
        "o": [
          "4.1.1 Employee Data Management",
          "4.1.2 Recruitment",
          "4.1.3 Employee Payroll Data Preparation"
        ],
        "a": 0,
        "why": "Employee master data sits under 4.1.1."
      },
      {
        "id": "h2",
        "tower": "Human Resources",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "An employee record has a data quality issue. Where do you look first?",
        "o": [
          "The exception handling and data quality checks for 4.1.1",
          "The Tax pages",
          "Delete the record"
        ],
        "a": 0,
        "why": "Data quality checks are a function of 4.1.1."
      },
      {
        "id": "h3",
        "tower": "Human Resources",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which service covers screening and shortlisting candidates?",
        "o": [
          "4.1.2 Recruitment",
          "4.1.1 Employee Data Management",
          "4.1.3 Payroll Data Preparation"
        ],
        "a": 0,
        "why": "Recruitment includes screening and shortlisting."
      },
      {
        "id": "h4",
        "tower": "Human Resources",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "Which service covers payroll cut-off dates?",
        "o": [
          "4.1.3 Employee Payroll Data Preparation",
          "4.1.2 Recruitment",
          "4.1.1 Employee Data Management"
        ],
        "a": 0,
        "why": "Payroll cut-off coordination sits under 4.1.3."
      },
      {
        "id": "h5",
        "tower": "Human Resources",
        "week": 11,
        "qtype": "Multiple choice",
        "q": "You must prepare payroll data on your own. Where do you find the steps?",
        "o": [
          "4.1.3 Employee Payroll Data Preparation",
          "4.1.2 Recruitment",
          "Ask a colleague only"
        ],
        "a": 0,
        "why": "The service page links to the SOPs and guides."
      },
      {
        "id": "g11",
        "tower": "All",
        "week": 5,
        "qtype": "Multiple choice",
        "q": "You are following one process end to end. Where do you start?",
        "o": [
          "The L2 service page and its process map",
          "The glossary",
          "An old email from a colleague"
        ],
        "a": 0,
        "why": "The L2 page shows the process steps and the knowledge for each step."
      },
      {
        "id": "g12",
        "tower": "All",
        "week": 5,
        "qtype": "Multiple choice",
        "q": "What does a highlighted step on the business process map mean?",
        "o": [
          "It is covered by the current KM pilot",
          "It is urgent",
          "It is blocked"
        ],
        "a": 0,
        "why": "The highlighted step is the one covered by the current KM pilot."
      },
      {
        "id": "g13",
        "tower": "All",
        "week": 6,
        "qtype": "Multiple choice",
        "q": "While shadowing you notice a step that differs from the SOP. What should you do?",
        "o": [
          "Note it down and raise it with the page owner or expert",
          "Rewrite the SOP yourself",
          "Ignore it"
        ],
        "a": 0,
        "why": "Readers do not edit content. The page owner and the expert keep it correct."
      },
      {
        "id": "g14",
        "tower": "All",
        "week": 7,
        "qtype": "Multiple choice",
        "q": "Which two sources do you use when practising a step?",
        "o": [
          "The SOP and the quick reference guide",
          "Only the glossary",
          "Only what a colleague remembers"
        ],
        "a": 0,
        "why": "The SOP gives the steps and the quick reference guide is the checklist."
      },
      {
        "id": "g15",
        "tower": "All",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "What does the complexity rating (Low, Medium, High) on an exception tell you?",
        "o": [
          "How involved the situation is and how soon to escalate",
          "How long the document is",
          "Who wrote it"
        ],
        "a": 0,
        "why": "Exception Handling items list the situation, complexity, action and who to escalate to."
      },
      {
        "id": "g16",
        "tower": "All",
        "week": 9,
        "qtype": "Multiple choice",
        "q": "During supervised execution, what is the reviewer’s role?",
        "o": [
          "Check your work and give feedback before it is final",
          "Do the task for you",
          "Approve it without checking"
        ],
        "a": 0,
        "why": "You do the step and someone reviews it."
      },
      {
        "id": "g17",
        "tower": "All",
        "week": 10,
        "qtype": "Multiple choice",
        "q": "A page is marked Draft. What does that mean?",
        "o": [
          "The content is still being worked on and is not approved yet",
          "It has been approved",
          "It has been retired"
        ],
        "a": 0,
        "why": "Draft, In review and Approved show how far content is through approval."
      },
      {
        "id": "g18",
        "tower": "All",
        "week": 11,
        "qtype": "Multiple choice",
        "q": "You need guidance on a task you have not done before. What is the fastest route?",
        "o": [
          "Search the Knowledge Centre and open the matching service page",
          "Wait for your manager to explain",
          "Guess based on a similar task"
        ],
        "a": 0,
        "why": "Search or browse to the L2 service, then to the process step."
      },
      {
        "id": "g19",
        "tower": "All",
        "week": 12,
        "qtype": "Multiple choice",
        "q": "What makes a good readiness reflection?",
        "o": [
          "What I can do on my own and where I still need support",
          "A list of every document I opened",
          "Only what went well"
        ],
        "a": 0,
        "why": "It helps you and your manager plan the support you still need."
      },
      {
        "id": "f6",
        "tower": "Finance & Accounting",
        "week": 5,
        "qtype": "Multiple choice",
        "q": "What is the first step on the Credit Management process map?",
        "o": [
          "Customer Risk Assessment",
          "Payment Approval",
          "Shipment & Payment"
        ],
        "a": 0,
        "why": "The map starts with the customer risk assessment, then the payment method decision."
      },
      {
        "id": "f7",
        "tower": "Finance & Accounting",
        "week": 7,
        "qtype": "Multiple choice",
        "q": "Which LC field lists the documents required for presentation?",
        "o": [
          "46A",
          "45A",
          "48"
        ],
        "a": 0,
        "why": "46A lists documents required, 45A the goods and 48 the presentation period."
      },
      {
        "id": "f8",
        "tower": "Finance & Accounting",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "A 47A condition needs several review passes between CO and Finance. How is it rated in the pilot?",
        "o": [
          "Medium complexity",
          "Low complexity",
          "It is not an exception"
        ],
        "a": 0,
        "why": "See the exception handling item for additional conditions."
      },
      {
        "id": "c6",
        "tower": "Customer Operations",
        "week": 5,
        "qtype": "Multiple choice",
        "q": "In Fulfil Orders, which function comes first?",
        "o": [
          "Processing the orders",
          "Shipping the order",
          "Manage reversed logistics"
        ],
        "a": 0,
        "why": "1.1.4.1 Processing the orders comes before 1.1.4.2 Shipping the order."
      },
      {
        "id": "c7",
        "tower": "Customer Operations",
        "week": 7,
        "qtype": "Multiple choice",
        "q": "Where do you find creating a credit or debit note and approving it?",
        "o": [
          "1.1.5 Billing & Invoicing",
          "1.1.4 Fulfil Orders",
          "1.1.7 Customer Satisfaction"
        ],
        "a": 0,
        "why": "Credit and debit notes are a function of Billing & Invoicing."
      },
      {
        "id": "c8",
        "tower": "Customer Operations",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "Which service covers system adjustments for delinquent account balances?",
        "o": [
          "1.1.6 Collection Management",
          "1.1.3 Capture & Monitor Orders",
          "1.1.2 Contract Management"
        ],
        "a": 0,
        "why": "This is function 1.1.6.1 under Collection Management."
      },
      {
        "id": "p6",
        "tower": "Procurement",
        "week": 5,
        "qtype": "Multiple choice",
        "q": "Which function comes first under Spot Buy?",
        "o": [
          "Analyze spot buy requirements",
          "Generate and issue a Purchase Order",
          "Recommend and approve vendor"
        ],
        "a": 0,
        "why": "2.1.7.1 is the first function of Spot Buy."
      },
      {
        "id": "p7",
        "tower": "Procurement",
        "week": 7,
        "qtype": "Multiple choice",
        "q": "Which function comes first under Vendor Data Management (PO)?",
        "o": [
          "Establish vendor master data policies and guideline",
          "Deactivate vendor accounts",
          "Modify/block vendor accounts"
        ],
        "a": 0,
        "why": "2.1.1.1 comes first."
      },
      {
        "id": "p8",
        "tower": "Procurement",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "Where would you find crisis procurement and emergency sourcing?",
        "o": [
          "2.1.6 Project Turnaround (PTA)",
          "2.1.7 Spot Buy",
          "2.2.1 Contract Management"
        ],
        "a": 0,
        "why": "This is function 2.1.6.5."
      },
      {
        "id": "h6",
        "tower": "Human Resources",
        "week": 5,
        "qtype": "Multiple choice",
        "q": "Which service reviews a job requisition for completeness?",
        "o": [
          "4.1.2 Recruitment",
          "4.1.1 Employee Data Management",
          "4.1.3 Employee Payroll Data Preparation"
        ],
        "a": 0,
        "why": "This is function 4.1.2.1 under Recruitment."
      },
      {
        "id": "h7",
        "tower": "Human Resources",
        "week": 7,
        "qtype": "Multiple choice",
        "q": "Where do you find creating, updating and validating employee records?",
        "o": [
          "4.1.1 Employee Data Management",
          "4.1.2 Recruitment",
          "4.1.3 Employee Payroll Data Preparation"
        ],
        "a": 0,
        "why": "This is function 4.1.1.1."
      },
      {
        "id": "h8",
        "tower": "Human Resources",
        "week": 8,
        "qtype": "Multiple choice",
        "q": "Which function covers periodic audits of employee data accuracy and consistency?",
        "o": [
          "Data quality and validation checks (4.1.1)",
          "Screening and shortlisting candidates (4.1.2)",
          "Payroll cut-off coordination (4.1.3)"
        ],
        "a": 0,
        "why": "This is function 4.1.1.3."
      }
    ]
  },
  "changeLog": [
    {
      "at": "2026-10-08T15:20:00+07:00",
      "by": "Jules Pemberton",
      "action": "added",
      "section": "Knowledge items",
      "target": "sap-pi",
      "summary": "Added proforma invoice video"
    },
    {
      "at": "2026-10-08T14:10:00+07:00",
      "by": "Jules Pemberton",
      "action": "added",
      "section": "Knowledge items",
      "target": "sap-ship",
      "summary": "Added shipping instruction video"
    },
    {
      "at": "2026-10-07T11:45:00+07:00",
      "by": "Tasha Verlinden",
      "action": "added",
      "section": "Knowledge items",
      "target": "lc-ex-med",
      "summary": "Added exception: additional condition needs several review passes (Medium)"
    },
    {
      "at": "2026-10-07T11:30:00+07:00",
      "by": "Tasha Verlinden",
      "action": "added",
      "section": "Knowledge items",
      "target": "lc-ex-low",
      "summary": "Added exception: charges split differs from contract terms (Low)"
    },
    {
      "at": "2026-10-06T16:45:00+07:00",
      "by": "Tasha Verlinden",
      "action": "edited",
      "section": "Knowledge items",
      "target": "lc-dtp",
      "summary": "Version 0.2 → 0.3; Require access on"
    }
  ]
};

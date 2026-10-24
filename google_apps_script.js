/**
 * TEKTON ELEVATORS - Google Apps Script Backend WebHook
 * Paste this script into Google Sheets (Extensions > Apps Script)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var fileUrl = "No Image Uploaded";
    
    // Save site photo to Google Drive if photo Base64 data is present
    if (data.photoBase64) {
      var folderId = "YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE"; // Insert Drive Folder ID
      var folder = DriveApp.getFolderById(folderId);
      
      var base64Data = data.photoBase64.split(",")[1];
      var decodedBlob = Utilities.base64Decode(base64Data);
      var blob = Utilities.newBlob(decodedBlob, "image/jpeg", data.leadId + "_SitePhoto.jpg");
      
      var file = folder.createFile(blob);
      fileUrl = file.getUrl();
    }
    
    // Append Lead Data Row to Google Sheet
    sheet.appendRow([
      new Date(),
      data.leadId,
      data.name,
      data.phone,
      data.liftType,
      data.stops,
      data.buildingStatus,
      data.location,
      data.remarks,
      data.stage,
      fileUrl
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "success", 
      "message": "Lead saved successfully to TEKTON Google Sheet",
      "fileUrl": fileUrl
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      "status": "error", 
      "message": error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("TEKTON Elevators API is Online.");
}

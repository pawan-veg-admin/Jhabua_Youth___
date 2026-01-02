<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu to Excel Converter</title>
    <style>
        /* Professional Styling */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #e9ecef;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .card {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            width: 100%;
            max-width: 500px;
            text-align: center;
        }

        h2 { margin-bottom: 20px; color: #333; }
        
        .upload-area {
            border: 2px dashed #007bff;
            padding: 30px;
            border-radius: 8px;
            background-color: #f8f9fa;
            cursor: pointer;
            transition: 0.3s;
        }

        .upload-area:hover { background-color: #e2e6ea; }

        input[type="file"] { display: none; }
        
        label {
            display: block;
            font-size: 16px;
            color: #007bff;
            cursor: pointer;
            font-weight: bold;
        }

        button {
            background-color: #28a745; /* Excel Green */
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            margin-top: 20px;
            cursor: pointer;
            width: 100%;
            transition: 0.3s;
        }

        button:hover { background-color: #218838; }
        button:disabled { background-color: #ccc; cursor: not-allowed; }

        #status { margin-top: 20px; font-weight: bold; }
        .success { color: green; }
        .error { color: red; }
        .loading { color: #007bff; }

    </style>
</head>
<body>

    <div class="card">
        <h2>📸 Menu Image to Excel</h2>
        <p>Select a menu image, and AI will convert it to Excel.</p>

        <div class="upload-area" onclick="document.getElementById('fileInput').click()">
            <input type="file" id="fileInput" accept="image/*" onchange="previewFile()">
            <label id="fileLabel">📁 Click to Select Image</label>
        </div>

        <button id="processBtn" onclick="processImage()">🚀 Convert to Excel</button>

        <p id="status"></p>
    </div>

    <script>
        // --- CONFIGURATION ---
        const WEBHOOK_URL = "https://n8n.srv1240914.hstgr.cloud/webhook/menu-upload";
        // ---------------------

        function previewFile() {
            const fileInput = document.getElementById('fileInput');
            const fileLabel = document.getElementById('fileLabel');
            if (fileInput.files.length > 0) {
                fileLabel.innerText = "✅ Selected: " + fileInput.files[0].name;
            }
        }

        async function processImage() {

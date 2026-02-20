import { removeBackground } from 'https://cdn.jsdelivr.net/npm/@imgly/background-removal@1.5.5/+esm';

const i18n = {
    id: {
        help: "Bantuan", checklist: "Checklist",
        heroTitle: 'Hapus Latar Belakang Gambar <span class="text-primary">Secara Otomatis</span>',
        heroSubtitle: "Didukung AI — 100% diproses di browser Anda. Tanpa upload ke server, privasi terjaga.",
        highQualityLabel: "Kualitas tinggi (tanpa downscale, lebih lambat untuk gambar besar)",
        dropTitle: "Seret & Lepas Gambar di Sini",
        dropSubtitle: "atau klik untuk memilih file (bisa pilih beberapa sekaligus)",
        maxSize: "Maks 20MB",
        batchQueue: "Antrian batch:", batchRemaining: "gambar tersisa",
        cancelBatch: "Batalkan Antrian",
        sampleText: "Tidak punya gambar? Coba contoh:",
        processingTitle: "Memproses Gambar...",
        processingMsg: "Memuat model AI, ini mungkin memerlukan waktu beberapa saat untuk pertama kali...",
        cancelBtn: "Batalkan",
        resultTitle: "Hasil Penghapusan Background",
        cropResize: "Crop & Resize", newImage: "Gambar Baru",
        sideBySide: "Berdampingan", resultOnly: "Hasil",
        noBg: "TANPA BACKGROUND",
        sliderHint: "Geser kiri-kanan untuk membandingkan",
        imageInfo: "Informasi Gambar",
        fileName: "Nama File", dimensions: "Dimensi", origSize: "Ukuran Asli",
        processTime: "Waktu Proses", scaled: "Di-resize",
        bgLabel: "Latar Belakang", apply: "Terapkan",
        edgeAdj: "Penyesuaian Tepi",
        featherLabel: "Kehalusan Tepi (Feather)", sharp: "Tajam", smooth: "Halus",
        erodeLabel: "Erode / Expand Tepi", applyAdj: "Terapkan Penyesuaian",
        download: "Unduh Hasil",
        dlPng: "Unduh PNG (Transparan)", dlJpg: "Unduh JPG (Dengan Background)",
        jpgQualityLabel: "Kualitas JPG", dlWebp: "Unduh WebP",
        sessionHistory: "Riwayat Sesi",
        localOnly: "Data hanya tersimpan lokal di perangkat Anda",
        cropResizeTitle: "Crop & Resize Hasil",
        cropTab: "Crop", resizeTab: "Resize",
        width: "Lebar", height: "Tinggi", applyCrop: "Terapkan Crop",
        newWidth: "Lebar Baru (px)", newHeight: "Tinggi Baru (px)",
        keepRatio: "Pertahankan rasio aspek", applyResize: "Terapkan Resize",
        checklistTitle: "Checklist Review Rilis",
        checklistDesc: "Lakukan pengujian berikut sebelum setiap rilis atau pembaruan library:",
        clFileTest: "Pengujian Upload File", clBrowserTest: "Kompatibilitas Browser",
        clMobileTest: "Pengujian Mobile", clFuncTest: "Fungsionalitas Utama",
        resetChecklist: "Reset Checklist",
        helpTitle: "Panduan Penggunaan",
        helpQ1: "Bagaimana cara menggunakan?",
        helpA1_html: "<ol><li>Upload gambar dengan drag & drop atau klik area upload.</li><li>Tunggu proses AI menghapus latar belakang.</li><li>Sesuaikan hasil dengan opsi background, penyesuaian tepi, crop & resize.</li><li>Unduh hasil dalam format PNG, JPG, atau WebP.</li></ol>",
        helpQ2: "Apakah gambar saya aman?",
        helpA2: "Ya! Seluruh proses dilakukan 100% di browser Anda. Tidak ada gambar yang dikirim ke server manapun.",
        helpQ3: "Apa itu Batch Processing?",
        helpA3: "Anda dapat memilih beberapa gambar sekaligus. Gambar akan diproses satu per satu secara otomatis dengan indikator progres antrian.",
        helpQ4: "Kenapa gambar saya di-resize?",
        helpA4: 'Gambar dengan dimensi lebih dari 4000px otomatis di-downscale untuk performa optimal. Aktifkan opsi "Kualitas tinggi" di halaman upload untuk memproses resolusi penuh.',
        footerNote: "Semua pemrosesan dilakukan di browser Anda.",

        errNetwork: "Kesalahan jaringan: Tidak dapat mengunduh gambar. Periksa koneksi internet Anda.",
        errModel: "Kesalahan model AI: Model gagal memproses gambar. Coba muat ulang halaman.",
        errFileBroken: "File gambar rusak atau tidak dapat dibaca. Coba file lain.",
        errFileType: "Format file tidak didukung. Gunakan format: PNG, JPG, WebP, atau BMP.",
        errFileSize: "Ukuran file terlalu besar. Maksimal 20MB.",
        errFileEmpty: "File kosong atau tidak valid. Pilih file gambar yang benar.",
        errGeneral: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi.",
        errCancelled: "Pemrosesan gambar dibatalkan.",

        progInit: "Menginisialisasi model AI...",
        progDownload: "Mengunduh gambar contoh...",
        progLoad: "Memuat & menjalankan model AI...",
        progModel: "Memuat model AI ke memori...",
        progAnalyze: "Menganalisis gambar...",
        progDetect: "Mendeteksi objek utama...",
        progRemove: "Menghapus latar belakang...",
        progEdge: "Memperbaiki tepi...",
        progFinalize: "Memfinalisasi hasil...",
        progDone: "Selesai!",
        progScale: "Mengecilkan resolusi gambar...",

        toastEdgeOk: "Penyesuaian tepi diterapkan!",
        toastDownloaded: "berhasil diunduh!",
        toastCropOk: "Crop berhasil diterapkan!",
        toastResizeOk: "Resize berhasil diterapkan!",
        toastBatchDone: "Batch processing selesai!",
        toastBatchCancel: "Antrian batch dibatalkan.",
        toastValidateImage: "Memvalidasi gambar...",
        seconds: "detik",
    },
    en: {
        help: "Help", checklist: "Checklist",
        heroTitle: 'Remove Image Background <span class="text-primary">Automatically</span>',
        heroSubtitle: "AI-Powered — 100% processed in your browser. No server uploads, your privacy is protected.",
        highQualityLabel: "High quality (no downscale, slower for large images)",
        dropTitle: "Drag & Drop Images Here",
        dropSubtitle: "or click to select files (multiple selection supported)",
        maxSize: "Max 20MB",
        batchQueue: "Batch queue:", batchRemaining: "images remaining",
        cancelBatch: "Cancel Queue",
        sampleText: "No image? Try a sample:",
        processingTitle: "Processing Image...",
        processingMsg: "Loading AI model, this may take a moment for the first time...",
        cancelBtn: "Cancel",
        resultTitle: "Background Removal Result",
        cropResize: "Crop & Resize", newImage: "New Image",
        sideBySide: "Side by Side", resultOnly: "Result",
        noBg: "NO BACKGROUND",
        sliderHint: "Slide left-right to compare",
        imageInfo: "Image Info",
        fileName: "File Name", dimensions: "Dimensions", origSize: "Original Size",
        processTime: "Process Time", scaled: "Resized",
        bgLabel: "Background", apply: "Apply",
        edgeAdj: "Edge Adjustment",
        featherLabel: "Edge Feather", sharp: "Sharp", smooth: "Smooth",
        erodeLabel: "Erode / Expand Edge", applyAdj: "Apply Adjustment",
        download: "Download Result",
        dlPng: "Download PNG (Transparent)", dlJpg: "Download JPG (With Background)",
        jpgQualityLabel: "JPG Quality", dlWebp: "Download WebP",
        sessionHistory: "Session History",
        localOnly: "Data is only stored locally on your device",
        cropResizeTitle: "Crop & Resize Result",
        cropTab: "Crop", resizeTab: "Resize",
        width: "Width", height: "Height", applyCrop: "Apply Crop",
        newWidth: "New Width (px)", newHeight: "New Height (px)",
        keepRatio: "Keep aspect ratio", applyResize: "Apply Resize",
        checklistTitle: "Release Review Checklist",
        checklistDesc: "Perform the following tests before each release or library update:",
        clFileTest: "File Upload Tests", clBrowserTest: "Browser Compatibility",
        clMobileTest: "Mobile Testing", clFuncTest: "Core Functionality",
        resetChecklist: "Reset Checklist",
        helpTitle: "User Guide",
        helpQ1: "How to use?",
        helpA1_html: "<ol><li>Upload an image via drag & drop or click the upload area.</li><li>Wait for the AI to remove the background.</li><li>Adjust with background options, edge tuning, crop & resize.</li><li>Download the result as PNG, JPG, or WebP.</li></ol>",
        helpQ2: "Is my image safe?",
        helpA2: "Yes! Everything is processed 100% in your browser. No images are sent to any server.",
        helpQ3: "What is Batch Processing?",
        helpA3: "You can select multiple images at once. They will be processed one by one automatically with a queue progress indicator.",
        helpQ4: "Why was my image resized?",
        helpA4: 'Images with dimensions over 4000px are auto-downscaled for optimal performance. Enable "High quality" on the upload page to process at full resolution.',
        footerNote: "All processing happens in your browser.",
        errNetwork: "Network error: Cannot download image. Check your internet connection.",
        errModel: "AI model error: The model failed to process the image. Try reloading the page.",
        errFileBroken: "Image file is corrupted or unreadable. Try another file.",
        errFileType: "File format not supported. Use: PNG, JPG, WebP, or BMP.",
        errFileSize: "File size too large. Maximum 20MB.",
        errFileEmpty: "File is empty or invalid. Select a valid image file.",
        errGeneral: "An unexpected error occurred. Please try again.",
        errCancelled: "Image processing cancelled.",
        progInit: "Initializing AI model...",
        progDownload: "Downloading sample image...",
        progLoad: "Loading & running AI model...",
        progModel: "Loading AI model to memory...",
        progAnalyze: "Analyzing image...",
        progDetect: "Detecting main object...",
        progRemove: "Removing background...",
        progEdge: "Refining edges...",
        progFinalize: "Finalizing result...",
        progDone: "Done!",
        progScale: "Downscaling image resolution...",
        toastEdgeOk: "Edge adjustments applied!",
        toastDownloaded: "downloaded successfully!",
        toastCropOk: "Crop applied successfully!",
        toastResizeOk: "Resize applied successfully!",
        toastBatchDone: "Batch processing completed!",
        toastBatchCancel: "Batch queue cancelled.",
        toastValidateImage: "Validating image...",
        seconds: "seconds",
    }
};

let currentLang = localStorage.getItem("bgremover-lang") || "id";

function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || (i18n["id"][key]) || key;
}

function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const val = t(key);
        if (val) el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
        const key = el.getAttribute("data-i18n-html");
        const htmlKey = key.replace("html", "") + "_html";
        const val = t(htmlKey) || t(key);
        if (val) el.innerHTML = val;
    });
    document.querySelectorAll("#langSwitch .btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
}

const state = {
    originalFile: null,
    originalURL: null,
    resultBlob: null,
    resultURL: null,
    rawMaskCanvas: null,
    rawOrigCanvas: null,
    processing: false,
    history: [],
    abortController: null,
    batchQueue: [],
    batchCancelled: false,
    wasScaled: false,
    origDimensions: null,
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
    sectionUpload: $("#sectionUpload"),
    sectionProcessing: $("#sectionProcessing"),
    sectionResult: $("#sectionResult"),
    dropZone: $("#dropZone"),
    fileInput: $("#fileInput"),
    progressBar: $("#progressBar"),
    progressText: $("#progressText"),
    processingTitle: $("#processingTitle"),
    processingMessage: $("#processingMessage"),
    btnCancel: $("#btnCancel"),
    btnNewImage: $("#btnNewImage"),
    btnThemeToggle: $("#btnThemeToggle"),
    imgOrigSide: $("#imgOrigSide"),
    imgResultSide: $("#imgResultSide"),
    imgOrigSlider: $("#imgOrigSlider"),
    imgResultSlider: $("#imgResultSlider"),
    imgResultOnly: $("#imgResultOnly"),
    resultContainerSide: $("#resultContainerSide"),
    resultContainerOnly: $("#resultContainerOnly"),
    sliderCompare: $("#sliderCompare"),
    sliderClipDiv: $("#sliderClipDiv"),
    sliderLine: $("#sliderLine"),
    infoFileName: $("#infoFileName"),
    infoDimension: $("#infoDimension"),
    infoFileSize: $("#infoFileSize"),
    infoProcessTime: $("#infoProcessTime"),
    rowScaled: $("#rowScaled"),
    infoScaled: $("#infoScaled"),
    bgColorOptions: $("#bgColorOptions"),
    customBgColor: $("#customBgColor"),
    btnApplyCustomBg: $("#btnApplyCustomBg"),
    rangeFeather: $("#rangeFeather"),
    rangeErode: $("#rangeErode"),
    featherVal: $("#featherVal"),
    erodeVal: $("#erodeVal"),
    btnApplyEdge: $("#btnApplyEdge"),
    btnDownloadPNG: $("#btnDownloadPNG"),
    btnDownloadJPG: $("#btnDownloadJPG"),
    btnDownloadWebP: $("#btnDownloadWebP"),
    jpgQuality: $("#jpgQuality"),
    historyList: $("#historyList"),
    appToast: $("#appToast"),
    toastTitle: $("#toastTitle"),
    toastBody: $("#toastBody"),
    chkHighQuality: $("#chkHighQuality"),

    batchProgress: $("#batchProgress"),
    batchCurrent: $("#batchCurrent"),
    batchTotal: $("#batchTotal"),
    batchBar: $("#batchBar"),
    btnCancelBatch: $("#btnCancelBatch"),

    cropImage: $("#cropImage"),
    cropX: $("#cropX"), cropY: $("#cropY"),
    cropW: $("#cropW"), cropH: $("#cropH"),
    btnApplyCrop: $("#btnApplyCrop"),
    resizeW: $("#resizeW"), resizeH: $("#resizeH"),
    chkAspectRatio: $("#chkAspectRatio"),
    btnApplyResize: $("#btnApplyResize"),
    btnResetChecklist: $("#btnResetChecklist"),
};

function showToast(title, message) {
    dom.toastTitle.textContent = title;
    dom.toastBody.textContent = message;
    const t = bootstrap.Toast.getOrCreateInstance(dom.appToast);
    t.show();
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(2) + " MB";
}

function showSection(name) {
    dom.sectionUpload.classList.toggle("d-none", name !== "upload");
    dom.sectionProcessing.classList.toggle("d-none", name !== "processing");
    dom.sectionResult.classList.toggle("d-none", name !== "result");
    if (name === "result") {
        dom.sectionResult.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function setProgress(pct, msg) {
    dom.progressBar.style.width = pct + "%";
    dom.progressText.textContent = Math.round(pct) + "%";
    if (msg) dom.processingMessage.textContent = msg;
}

function cleanupMemory() {
    if (state.originalURL && state.originalURL.startsWith("blob:")) {
        URL.revokeObjectURL(state.originalURL);
    }
    if (state.resultURL && state.resultURL.startsWith("blob:")) {
        URL.revokeObjectURL(state.resultURL);
    }
    if (state.rawOrigCanvas) {
        const ctx = state.rawOrigCanvas.getContext("2d");
        ctx.clearRect(0, 0, state.rawOrigCanvas.width, state.rawOrigCanvas.height);
        state.rawOrigCanvas.width = 0;
        state.rawOrigCanvas.height = 0;
        state.rawOrigCanvas = null;
    }
    if (state.rawMaskCanvas) {
        const ctx = state.rawMaskCanvas.getContext("2d");
        ctx.clearRect(0, 0, state.rawMaskCanvas.width, state.rawMaskCanvas.height);
        state.rawMaskCanvas.width = 0;
        state.rawMaskCanvas.height = 0;
        state.rawMaskCanvas = null;
    }
    state.originalFile = null;
    state.originalURL = null;
    state.resultBlob = null;
    state.resultURL = null;
    state.wasScaled = false;
    state.origDimensions = null;
}

function classifyError(err) {
    const msg = (err.message || "").toLowerCase();
    const name = (err.name || "").toLowerCase();

    if (name === "aborterror") return { type: "cancelled", msg: t("errCancelled") };
    if (name === "typeerror" && (msg.includes("fetch") || msg.includes("network"))) return { type: "network", msg: t("errNetwork") };
    if (msg.includes("network") || msg.includes("failed to fetch") || msg.includes("net::") || msg.includes("cors")) return { type: "network", msg: t("errNetwork") };
    if (msg.includes("model") || msg.includes("onnx") || msg.includes("wasm") || msg.includes("inference") || msg.includes("session")) return { type: "model", msg: t("errModel") };
    if (msg.includes("decode") || msg.includes("corrupt") || msg.includes("invalid image") || msg.includes("could not load")) return { type: "file", msg: t("errFileBroken") };
    if (msg.includes("format") || msg.includes("mime") || msg.includes("unsupported")) return { type: "file", msg: t("errFileType") };
    return { type: "general", msg: t("errGeneral") + " (" + err.message + ")" };
}

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp", "image/bmp", "image/heic", "image/heif"];
const MAX_FILE_SIZE = 20 * 1024 * 1024;

function validateFile(file) {
    if (!file || file.size === 0) {
        showToast("Error", t("errFileEmpty"));
        return false;
    }
    const ext = file.name.split(".").pop().toLowerCase();
    const extOk = ["png","jpg","jpeg","webp","bmp","heic","heif"].includes(ext);
    const typeOk = ALLOWED_TYPES.includes(file.type);
    if (!typeOk && !extOk) {
        showToast("Error", t("errFileType"));
        return false;
    }
    if (file.size > MAX_FILE_SIZE) {
        showToast("Error", t("errFileSize"));
        return false;
    }
    return true;
}

function validateImageReadable(file) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => { URL.revokeObjectURL(url); resolve(true); };
        img.onerror = () => { URL.revokeObjectURL(url); resolve(false); };
        img.src = url;
    });
}

const MAX_DIMENSION = 4000;

function scaleImageIfNeeded(file) {
    return new Promise((resolve) => {
        const highQuality = dom.chkHighQuality.checked;
        if (highQuality) { resolve({ file, scaled: false }); return; }

        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
            URL.revokeObjectURL(url);
            const w = img.naturalWidth, h = img.naturalHeight;
            state.origDimensions = { w, h };

            if (w <= MAX_DIMENSION && h <= MAX_DIMENSION) {
                resolve({ file, scaled: false });
                return;
            }

            const scale = Math.min(MAX_DIMENSION / w, MAX_DIMENSION / h);
            const nw = Math.round(w * scale);
            const nh = Math.round(h * scale);

            const canvas = document.createElement("canvas");
            canvas.width = nw;
            canvas.height = nh;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, nw, nh);

            canvas.toBlob((blob) => {
                canvas.width = 0; canvas.height = 0;
                const scaledFile = new File([blob], file.name, { type: "image/png" });
                resolve({ file: scaledFile, scaled: true, from: `${w}×${h}`, to: `${nw}×${nh}` });
            }, "image/png");
        };
        img.onerror = () => {
            URL.revokeObjectURL(url);
            resolve({ file, scaled: false });
        };
        img.src = url;
    });
}

function createSmoothProgress() {
    let current = 5;
    let target = 5;
    let intervalId = null;

    function start() {
        intervalId = setInterval(() => {
            if (current < target) {
                const diff = target - current;
                const step = Math.max(0.3, diff * 0.08);
                current = Math.min(current + step, target);
                setProgress(current, getProgressMessage(current));
            } else if (target < 80) {
                target += Math.random() * 1.2;
                target = Math.min(target, 80);
            }
        }, 200);
    }

    function setTarget(pct) {
        target = Math.max(target, pct);
    }

    function finish() {
        if (intervalId) clearInterval(intervalId);
        current = 100;
        setProgress(100, t("progDone"));
    }

    function stop() {
        if (intervalId) clearInterval(intervalId);
    }

    return { start, setTarget, finish, stop };
}

function getProgressMessage(pct) {
    if (pct < 20) return t("progModel");
    if (pct < 40) return t("progAnalyze");
    if (pct < 60) return t("progDetect");
    if (pct < 75) return t("progRemove");
    if (pct < 90) return t("progEdge");
    return t("progFinalize");
}

async function processImage(source) {
    if (state.processing) return;
    state.processing = true;

    cleanupMemory();
    showSection("processing");
    setProgress(5, t("progInit"));

    const startTime = performance.now();
    const progress = createSmoothProgress();

    try {
        let imgSrc = source;

        if (source instanceof File) {
            const readable = await validateImageReadable(source);
            if (!readable) {
                throw Object.assign(new Error("Image decode failed"), { _type: "file" });
            }

            const scaleResult = await scaleImageIfNeeded(source);
            imgSrc = scaleResult.file;
            state.wasScaled = scaleResult.scaled;
            state.originalFile = source;
            state.originalURL = URL.createObjectURL(scaleResult.file);

            if (scaleResult.scaled) {
                setProgress(12, t("progScale"));
            }
        } else if (typeof source === "string") {
            state.originalFile = null;
            state.originalURL = source;
            setProgress(10, t("progDownload"));
            let resp;
            try {
                resp = await fetch(source);
            } catch (fetchErr) {
                throw Object.assign(new Error("Network fetch failed"), { _type: "network" });
            }
            if (!resp.ok) {
                throw Object.assign(new Error("HTTP " + resp.status), { _type: "network" });
            }
            imgSrc = await resp.blob();
            state.originalFile = new File([imgSrc], "sample.jpg", { type: imgSrc.type });
        }

        progress.start();
        setProgress(15, t("progLoad"));

        const resultBlob = await removeBackground(imgSrc, {
            progress: (key, current, total) => {
                if (total > 0) {
                    const pct = Math.min(15 + (current / total) * 75, 95);
                    progress.setTarget(pct);
                }
            },
            output: { format: "image/png", quality: 1 }
        });

        progress.stop();
        setProgress(95, t("progFinalize"));

        state.resultBlob = resultBlob;
        if (state.resultURL) URL.revokeObjectURL(state.resultURL);
        state.resultURL = URL.createObjectURL(resultBlob);

        await buildRawCanvases(state.originalURL, state.resultURL);

        const elapsed = ((performance.now() - startTime) / 1000).toFixed(1);
        setProgress(100, t("progDone"));

        setTimeout(() => {
            displayResult(elapsed);
            addToHistory();
            state.processing = false;
        }, 400);

    } catch (err) {
        progress.stop();
        console.error("BG Removal Error:", err);
        state.processing = false;
        showSection("upload");

        if (err._type) {
            const errInfo = { type: err._type, msg: err._type === "network" ? t("errNetwork") : err._type === "file" ? t("errFileBroken") : t("errGeneral") };
            showToast("Error", errInfo.msg);
        } else {
            const errInfo = classifyError(err);
            if (errInfo.type !== "cancelled") {
                showToast("Error", errInfo.msg);
            }
        }
    }
}

async function buildRawCanvases(origURL, resultURL) {
    const origImg = await loadImage(origURL);
    state.rawOrigCanvas = document.createElement("canvas");
    state.rawOrigCanvas.width = origImg.naturalWidth;
    state.rawOrigCanvas.height = origImg.naturalHeight;
    state.rawOrigCanvas.getContext("2d").drawImage(origImg, 0, 0);

    const resImg = await loadImage(resultURL);
    state.rawMaskCanvas = document.createElement("canvas");
    state.rawMaskCanvas.width = resImg.naturalWidth;
    state.rawMaskCanvas.height = resImg.naturalHeight;
    state.rawMaskCanvas.getContext("2d").drawImage(resImg, 0, 0);
}

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => reject(Object.assign(new Error("Image load failed"), { _type: "file" }));
        img.src = src;
    });
}

async function processBatch(files) {
    const validFiles = [];
    for (const f of files) {
        if (validateFile(f)) validFiles.push(f);
    }
    if (validFiles.length === 0) return;
    if (validFiles.length === 1) {
        processImage(validFiles[0]);
        return;
    }

    state.batchQueue = [...validFiles];
    state.batchCancelled = false;
    const total = validFiles.length;

    dom.batchProgress.classList.remove("d-none");
    dom.batchTotal.textContent = total;

    for (let i = 0; i < total; i++) {
        if (state.batchCancelled) break;

        dom.batchCurrent.textContent = i + 1;
        dom.batchBar.style.width = ((i / total) * 100) + "%";

        await new Promise((resolve) => {
            const origOnFinish = state.processing;
            const checkDone = setInterval(() => {
                if (!state.processing) {
                    clearInterval(checkDone);
                    resolve();
                }
            }, 200);
        });

        if (state.batchCancelled) break;
        await processImage(validFiles[i]);

        await new Promise((resolve) => {
            const checkDone = setInterval(() => {
                if (!state.processing) { clearInterval(checkDone); resolve(); }
            }, 200);
        });
    }

    dom.batchBar.style.width = "100%";
    dom.batchCurrent.textContent = state.batchCancelled ? dom.batchCurrent.textContent : total;

    if (!state.batchCancelled) {
        showToast("✅ Batch", t("toastBatchDone"));
    }

    setTimeout(() => { dom.batchProgress.classList.add("d-none"); }, 3000);
    state.batchQueue = [];
}

function displayResult(elapsed) {
    showSection("result");

    dom.imgOrigSide.src = state.originalURL;
    dom.imgResultSide.src = state.resultURL;
    dom.imgOrigSlider.src = state.originalURL;
    dom.imgResultSlider.src = state.resultURL;
    dom.imgResultOnly.src = state.resultURL;

    const file = state.originalFile;
    dom.infoFileName.textContent = file ? file.name : "sample.jpg";
    dom.infoFileName.title = file ? file.name : "sample.jpg";
    dom.infoFileSize.textContent = file ? formatBytes(file.size) : "-";
    dom.infoProcessTime.textContent = elapsed + " " + t("seconds");

    if (state.wasScaled && state.origDimensions) {
        dom.rowScaled.classList.remove("d-none");
        dom.infoScaled.textContent = `${state.origDimensions.w}×${state.origDimensions.h} → ≤${MAX_DIMENSION}px`;
    } else {
        dom.rowScaled.classList.add("d-none");
    }

    const img = new Image();
    img.onload = () => {
        dom.infoDimension.textContent = img.naturalWidth + " × " + img.naturalHeight + " px";
    };
    img.src = state.originalURL;

    dom.rangeFeather.value = 0;
    dom.rangeErode.value = 0;
    dom.featherVal.textContent = "0px";
    dom.erodeVal.textContent = "0px";

    $$(".bg-option").forEach(b => b.classList.remove("active", "border-primary", "border-3"));
    $$(".bg-option")[0].classList.add("active", "border-primary", "border-3");

    if (state.rawMaskCanvas) {
        dom.cropW.value = state.rawMaskCanvas.width;
        dom.cropH.value = state.rawMaskCanvas.height;
        dom.resizeW.value = state.rawMaskCanvas.width;
        dom.resizeH.value = state.rawMaskCanvas.height;
    }
}

const CHECKER_BG = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Crect width='10' height='10' fill='%23ccc'/%3E%3Crect x='10' y='10' width='10' height='10' fill='%23ccc'/%3E%3Crect x='10' width='10' height='10' fill='%23fff'/%3E%3Crect y='10' width='10' height='10' fill='%23fff'/%3E%3C/svg%3E\")";

function applyBackground(color) {
    const containers = [dom.resultContainerSide, dom.resultContainerOnly];
    containers.forEach(c => {
        if (color === "transparent") {
            c.style.backgroundImage = CHECKER_BG;
            c.style.backgroundSize = "20px 20px";
            c.style.backgroundColor = "";
        } else {
            c.style.backgroundImage = "none";
            c.style.backgroundColor = color;
        }
    });
}

function applyEdgeAdjustments() {
    if (!state.rawMaskCanvas) return;

    const feather = parseFloat(dom.rangeFeather.value);
    const erode = parseInt(dom.rangeErode.value);
    const srcCanvas = state.rawMaskCanvas;
    const w = srcCanvas.width;
    const h = srcCanvas.height;

    const outCanvas = document.createElement("canvas");
    outCanvas.width = w;
    outCanvas.height = h;
    const outCtx = outCanvas.getContext("2d");
    outCtx.drawImage(srcCanvas, 0, 0);

    const imageData = outCtx.getImageData(0, 0, w, h);
    const data = imageData.data;

    if (erode !== 0) {
        const alpha = new Uint8ClampedArray(w * h);
        for (let i = 0; i < w * h; i++) alpha[i] = data[i * 4 + 3];
        const result = new Uint8ClampedArray(alpha);
        const radius = Math.abs(erode);

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                let val = erode < 0 ? 255 : 0;
                for (let dy = -radius; dy <= radius; dy++) {
                    for (let dx = -radius; dx <= radius; dx++) {
                        const nx = Math.min(Math.max(x + dx, 0), w - 1);
                        const ny = Math.min(Math.max(y + dy, 0), h - 1);
                        const a = alpha[ny * w + nx];
                        val = erode < 0 ? Math.min(val, a) : Math.max(val, a);
                    }
                }
                result[y * w + x] = val;
            }
        }
        for (let i = 0; i < w * h; i++) data[i * 4 + 3] = result[i];
    }

    outCtx.putImageData(imageData, 0, 0);

    if (feather > 0) {
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = w;
        tempCanvas.height = h;
        const tempCtx = tempCanvas.getContext("2d");
        tempCtx.filter = `blur(${feather}px)`;
        tempCtx.drawImage(outCanvas, 0, 0);

        const blurData = tempCtx.getImageData(0, 0, w, h).data;
        const origData = outCtx.getImageData(0, 0, w, h);
        for (let i = 0; i < w * h; i++) {
            origData.data[i * 4 + 3] = blurData[i * 4 + 3];
        }
        outCtx.putImageData(origData, 0, 0);
        tempCanvas.width = 0; tempCanvas.height = 0;
    }

    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = w;
    finalCanvas.height = h;
    const finalCtx = finalCanvas.getContext("2d");
    finalCtx.drawImage(state.rawOrigCanvas, 0, 0);

    const finalData = finalCtx.getImageData(0, 0, w, h);
    const maskData = outCtx.getImageData(0, 0, w, h);
    for (let i = 0; i < w * h; i++) {
        finalData.data[i * 4 + 3] = maskData.data[i * 4 + 3];
    }
    finalCtx.putImageData(finalData, 0, 0);

    finalCanvas.toBlob((blob) => {
        if (state.resultURL) URL.revokeObjectURL(state.resultURL);
        state.resultBlob = blob;
        state.resultURL = URL.createObjectURL(blob);
        dom.imgResultSide.src = state.resultURL;
        dom.imgResultSlider.src = state.resultURL;
        dom.imgResultOnly.src = state.resultURL;
        showToast("✅", t("toastEdgeOk"));
    }, "image/png");

    outCanvas.width = 0; outCanvas.height = 0;
    finalCanvas.width = 0; finalCanvas.height = 0;
}

function applyCrop() {
    if (!state.resultBlob) return;

    const x = parseInt(dom.cropX.value) || 0;
    const y = parseInt(dom.cropY.value) || 0;
    const cw = parseInt(dom.cropW.value) || 100;
    const ch = parseInt(dom.cropH.value) || 100;

    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, x, y, cw, ch, 0, 0, cw, ch);

        canvas.toBlob((blob) => {
            if (state.resultURL) URL.revokeObjectURL(state.resultURL);
            state.resultBlob = blob;
            state.resultURL = URL.createObjectURL(blob);
            dom.imgResultSide.src = state.resultURL;
            dom.imgResultSlider.src = state.resultURL;
            dom.imgResultOnly.src = state.resultURL;
            showToast("✅", t("toastCropOk"));
            canvas.width = 0; canvas.height = 0;
        }, "image/png");
    };
    img.src = state.resultURL;
}

function applyResize() {
    if (!state.resultBlob) return;

    const nw = parseInt(dom.resizeW.value);
    const nh = parseInt(dom.resizeH.value);
    if (!nw || !nh || nw < 1 || nh < 1) return;

    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = nw;
        canvas.height = nh;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, nw, nh);

        canvas.toBlob((blob) => {
            if (state.resultURL) URL.revokeObjectURL(state.resultURL);
            state.resultBlob = blob;
            state.resultURL = URL.createObjectURL(blob);
            dom.imgResultSide.src = state.resultURL;
            dom.imgResultSlider.src = state.resultURL;
            dom.imgResultOnly.src = state.resultURL;
            showToast("✅", t("toastResizeOk"));
            canvas.width = 0; canvas.height = 0;
        }, "image/png");
    };
    img.src = state.resultURL;
}

function initCropResizeListeners() {
    dom.btnApplyCrop.addEventListener("click", () => {
        applyCrop();
        bootstrap.Modal.getInstance($("#cropModal"))?.hide();
    });

    dom.btnApplyResize.addEventListener("click", () => {
        applyResize();
        bootstrap.Modal.getInstance($("#cropModal"))?.hide();
    });

    let resizeAspect = 1;
    $("#cropModal").addEventListener("shown.bs.modal", () => {
        if (state.resultURL) {
            dom.cropImage.src = state.resultURL;
            const img = new Image();
            img.onload = () => {
                dom.cropX.value = 0; dom.cropY.value = 0;
                dom.cropW.value = img.naturalWidth;
                dom.cropH.value = img.naturalHeight;
                dom.resizeW.value = img.naturalWidth;
                dom.resizeH.value = img.naturalHeight;
                resizeAspect = img.naturalWidth / img.naturalHeight;
            };
            img.src = state.resultURL;
        }
    });

    dom.resizeW.addEventListener("input", () => {
        if (dom.chkAspectRatio.checked && resizeAspect) {
            dom.resizeH.value = Math.round(parseInt(dom.resizeW.value) / resizeAspect);
        }
    });
    dom.resizeH.addEventListener("input", () => {
        if (dom.chkAspectRatio.checked && resizeAspect) {
            dom.resizeW.value = Math.round(parseInt(dom.resizeH.value) * resizeAspect);
        }
    });
}

function downloadResult(format) {
    if (!state.resultBlob) return;

    const fileName = (state.originalFile ? state.originalFile.name.replace(/\.[^.]+$/, "") : "image") + "_nobg";

    if (format === "png") {
        downloadBlob(state.resultBlob, fileName + ".png");
        return;
    }

    const img = new Image();
    img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");

        const activeBg = $(".bg-option.active");
        let bgColor = activeBg ? activeBg.dataset.bg : "transparent";

        if (format === "jpg") {
            ctx.fillStyle = bgColor === "transparent" ? "#ffffff" : bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        const mimeType = format === "jpg" ? "image/jpeg" : "image/webp";
        const quality = parseInt(dom.jpgQuality.value) / 100;
        const ext = format === "jpg" ? ".jpg" : ".webp";

        canvas.toBlob((blob) => {
            downloadBlob(blob, fileName + ext);
            canvas.width = 0; canvas.height = 0;
        }, mimeType, quality);
    };
    img.src = state.resultURL;
}

function downloadBlob(blob, filename) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
    showToast("📥", `${filename} ${t("toastDownloaded")}`);
}

function addToHistory() {
    const thumb = state.resultURL;
    const name = state.originalFile ? state.originalFile.name : "sample.jpg";
    state.history.push({ thumb, name, time: new Date().toLocaleTimeString("id-ID") });
    saveHistoryToLocal();
    renderHistory();
}

function saveHistoryToLocal() {
    try {
        const meta = state.history.map(h => ({ name: h.name, time: h.time }));
        localStorage.setItem("bgremover-history", JSON.stringify(meta));
    } catch (e) {  }
}

function loadHistoryFromLocal() {
    try {
        const data = JSON.parse(localStorage.getItem("bgremover-history") || "[]");

        return data;
    } catch { return []; }
}

function renderHistory() {
    dom.historyList.innerHTML = "";
    state.history.forEach((item) => {
        const div = document.createElement("div");
        div.className = "border rounded p-2 text-center";
        div.style.width = "100px";
        div.innerHTML = `
            <img src="${item.thumb}" class="img-fluid rounded mb-1" style="height:60px; object-fit:contain; background:#f0f0f0;" alt="${item.name}">
            <div class="small text-truncate">${item.name}</div>
            <div class="small text-body-secondary">${item.time}</div>
        `;
        dom.historyList.appendChild(div);
    });
}

function initSliderCompare() {
    const container = dom.sliderCompare;
    let isDragging = false;

    function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        let pct = ((x - rect.left) / rect.width) * 100;
        pct = Math.max(0, Math.min(100, pct));
        dom.sliderClipDiv.style.width = pct + "%";
        dom.sliderLine.style.left = pct + "%";
    }

    container.addEventListener("mousedown", (e) => { isDragging = true; updateSlider(e.clientX); });
    document.addEventListener("mousemove", (e) => { if (isDragging) updateSlider(e.clientX); });
    document.addEventListener("mouseup", () => { isDragging = false; });

    container.addEventListener("touchstart", (e) => { isDragging = true; updateSlider(e.touches[0].clientX); }, { passive: true });
    document.addEventListener("touchmove", (e) => { if (isDragging) updateSlider(e.touches[0].clientX); }, { passive: true });
    document.addEventListener("touchend", () => { isDragging = false; });
}

function initTheme() {
    const html = document.documentElement;
    const saved = localStorage.getItem("bgremover-theme") || "dark";
    html.setAttribute("data-bs-theme", saved);
    updateThemeIcon(saved);

    dom.btnThemeToggle.addEventListener("click", () => {
        const current = html.getAttribute("data-bs-theme");
        const next = current === "dark" ? "light" : "dark";
        html.setAttribute("data-bs-theme", next);
        localStorage.setItem("bgremover-theme", next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const icon = dom.btnThemeToggle.querySelector("i");
    icon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
}

function initLanguage() {
    document.querySelectorAll("#langSwitch .btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentLang = btn.dataset.lang;
            localStorage.setItem("bgremover-lang", currentLang);
            applyI18n();
        });
    });
    applyI18n();
}

function initChecklist() {

    const saved = JSON.parse(localStorage.getItem("bgremover-checklist") || "{}");
    Object.keys(saved).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.checked = saved[id];
    });

    document.querySelectorAll(".checklist-item input").forEach(cb => {
        cb.addEventListener("change", () => {
            const data = {};
            document.querySelectorAll(".checklist-item input").forEach(c => {
                data[c.id] = c.checked;
            });
            localStorage.setItem("bgremover-checklist", JSON.stringify(data));
        });
    });

    dom.btnResetChecklist.addEventListener("click", () => {
        document.querySelectorAll(".checklist-item input").forEach(c => c.checked = false);
        localStorage.removeItem("bgremover-checklist");
    });
}

function initEvents() {

    dom.fileInput.addEventListener("change", (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 1) {
            processBatch(files);
        } else if (files.length === 1) {
            if (validateFile(files[0])) processImage(files[0]);
        }
        e.target.value = "";
    });

    dom.dropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dom.dropZone.classList.add("bg-primary", "bg-opacity-10");
    });
    dom.dropZone.addEventListener("dragleave", () => {
        dom.dropZone.classList.remove("bg-primary", "bg-opacity-10");
    });
    dom.dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dom.dropZone.classList.remove("bg-primary", "bg-opacity-10");
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 1) {
            processBatch(files);
        } else if (files.length === 1) {
            if (validateFile(files[0])) processImage(files[0]);
        }
    });

    $$(".sample-btn").forEach(btn => {
        btn.addEventListener("click", () => processImage(btn.dataset.url));
    });

    dom.btnCancel.addEventListener("click", () => {
        state.processing = false;
        showSection("upload");
        showToast("⚠️", t("errCancelled"));
    });

    dom.btnCancelBatch.addEventListener("click", () => {
        state.batchCancelled = true;
        showToast("⚠️", t("toastBatchCancel"));
    });

    dom.btnNewImage.addEventListener("click", () => {
        cleanupMemory();
        showSection("upload");
    });

    $$(".bg-option").forEach(btn => {
        btn.addEventListener("click", () => {
            $$(".bg-option").forEach(b => b.classList.remove("active", "border-primary", "border-3"));
            btn.classList.add("active", "border-primary", "border-3");
            applyBackground(btn.dataset.bg);
        });
    });

    dom.btnApplyCustomBg.addEventListener("click", () => {
        $$(".bg-option").forEach(b => b.classList.remove("active", "border-primary", "border-3"));
        applyBackground(dom.customBgColor.value);
    });

    dom.rangeFeather.addEventListener("input", () => {
        dom.featherVal.textContent = dom.rangeFeather.value + "px";
    });
    dom.rangeErode.addEventListener("input", () => {
        dom.erodeVal.textContent = dom.rangeErode.value + "px";
    });
    dom.btnApplyEdge.addEventListener("click", applyEdgeAdjustments);

    dom.btnDownloadPNG.addEventListener("click", () => downloadResult("png"));
    dom.btnDownloadJPG.addEventListener("click", () => downloadResult("jpg"));
    dom.btnDownloadWebP.addEventListener("click", () => downloadResult("webp"));

    document.addEventListener("paste", (e) => {
        const items = e.clipboardData?.items;
        if (!items) return;
        for (const item of items) {
            if (item.type.startsWith("image/")) {
                const file = item.getAsFile();
                if (file && validateFile(file)) processImage(file);
                break;
            }
        }
    });
}

function init() {
    initTheme();
    initLanguage();
    initEvents();
    initSliderCompare();
    initCropResizeListeners();
    initChecklist();
    console.log("✅ BG Remover Pro (Enhanced) initialized!");
}

init();


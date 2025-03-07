const express = require("express");
const router = express.Router();
const cors = require("cors");

const corsOptions = {
    origin: 'https://forex-cooperation.vercel.app', 
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  };

  //http://localhost:5173
  
  router.use(cors(corsOptions));
  router.options('*', cors(corsOptions)); 

const { test, Delete, Decline, Approve, loadData, loginUser, applyLoan, createUser, deleteChat, getMessage, loginAdmin, chatSend, getUser, getUsers, addBalance , withdrawBank, getAdminChat, withdrawCrypto, AdminGetCrypto, AdminGetBankR, getBankRecords, getNotification, getLoanDataAdmin, getCryptoRecords, notificationAdder, userNotification} = require("../controllers/authController");

router.get('/test', test);
router.post("/Delete", Delete);
router.post("/Approve", Approve);
router.post("/Decline", Decline);
router.post("/getUser", getUser);
router.get("/getUsers", getUsers);
router.post("/loadData", loadData);
router.post('/login', loginUser);
router.post("/chatSend", chatSend);
router.post("/applyLoan", applyLoan);
router.post('/register', createUser);
router.post('/adminAuth', loginAdmin);
router.post('/addBalance', addBalance);
router.post("/deleteChat", deleteChat);
router.post("/getMessage", getMessage);
router.post("/getAdminChat", getAdminChat);
router.post("/withdrawBank", withdrawBank);
router.post("/AdminGetBankR", AdminGetBankR);
router.post("/AdminGetCrypto", AdminGetCrypto);
router.post("/withdrawCrypto", withdrawCrypto);
router.post("/getBankRecords", getBankRecords);
router.post("/userMessage", notificationAdder);
router.post("/getNotification", getNotification);
router.post("/userNotification", userNotification);
router.post("/getCryptoRecords", getCryptoRecords);
router.get("/getLoanDataAdmin", getLoanDataAdmin);


module.exports = router;
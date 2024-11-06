const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // استخرج الرمز من الرأس

  if (!token) {
    return res.sendStatus(403); // إذا لم يكن هناك رمز، إرجاع خطأ 403
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "mySuperSecretKey123!",
    (err, user) => {
      if (err) {
        return res.sendStatus(403); // إذا كانت عملية التحقق فشلت، إرجاع خطأ 403
      }

      req.user = user; // احفظ معلومات المستخدم في الطلب
      next(); // تابع إلى المسار التالي
    }
  );
};

// // استخدام هذا المتوسط في المسارات المحمية
// router.get("/protected", authenticateJWT, (req, res) => {
//   res.json({ message: "This is a protected route", user: req.user });
// });

module.exports = authenticateJWT;

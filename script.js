const users = [
  // معلمو المواد
  { name: "أحمد علي", email: "arabic@school.com", password: "1234", role: "teacher_arabic" },
  { name: "سارة يوسف", email: "english@school.com", password: "1234", role: "teacher_english" },
  { name: "خالد فهد", email: "physics@school.com", password: "1234", role: "teacher_physics" },
  { name: "منى سالم", email: "chemistry@school.com", password: "1234", role: "teacher_chemistry" },
  { name: "مروان حسن", email: "biology@school.com", password: "1234", role: "teacher_biology" },
  { name: "هالة عبد الله", email: "social@school.com", password: "1234", role: "teacher_social" },
  { name: "فهد العتيبي", email: "islamic@school.com", password: "1234", role: "teacher_islamic" },
  { name: "رنا خالد", email: "pe@school.com", password: "1234", role: "teacher_pe" },
  { name: "ماجد منصور", email: "computer@school.com", password: "1234", role: "teacher_computer" },

  // المشرف
  { name: "سعاد محمد", email: "supervisor@school.com", password: "1234", role: "supervisor" },

  // الأخصائي
  { name: "ليلى ناصر", email: "specialist@school.com", password: "1234", role: "specialist" },

  // رؤساء الأقسام
  { name: "خالد يوسف", email: "head_arabic@school.com", password: "1234", role: "head_arabic" },
  { name: "نورا عبد الله", email: "head_english@school.com", password: "1234", role: "head_english" },
  { name: "سامي حسين", email: "head_physics@school.com", password: "1234", role: "head_physics" },
  { name: "هالة فهد", email: "head_chemistry@school.com", password: "1234", role: "head_chemistry" },
  { name: "مروان سالم", email: "head_biology@school.com", password: "1234", role: "head_biology" },
  { name: "سلمى عبد العزيز", email: "head_social@school.com", password: "1234", role: "head_social" },
  { name: "فهد العتيبي", email: "head_islamic@school.com", password: "1234", role: "head_islamic" },
  { name: "رنا خالد", email: "head_pe@school.com", password: "1234", role: "head_pe" },
  { name: "ماجد منصور", email: "head_computer@school.com", password: "1234", role: "head_computer" },

  // الإدارة
  { name: "نوال فهد", email: "assistant@school.com", password: "1234", role: "assistant_manager" },
  { name: "محمود حسن", email: "it@school.com", password: "admin", role: "it" },

  // طلاب وأولياء أمور
  { name: "يوسف محمد", email: "student@school.com", password: "1234", role: "student" },
  { name: "وليد عبد الرحمن", email: "parent@school.com", password: "1234", role: "parent" }
];

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userRole", user.role);
    window.location.href = `${user.role}.html`;
  } else {
    errorMessage.textContent = "بيانات الدخول غير صحيحة، حاول مرة أخرى.";
  }
}
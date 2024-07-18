// تابعی برای تولید رنگ تصادفی
const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// تابعی برای تغییر رنگ باکس
const changeColor = (element) => {
  const newColor = generateRandomColor();
  element.style.backgroundColor = newColor;
  element.querySelector(".color-code").textContent = newColor;
};

//  مقداردهی اولیه رنگ‌های باکس‌ها
document.querySelectorAll(".box").forEach((box) => {
  changeColor(box);
});

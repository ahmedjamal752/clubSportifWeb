window.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll('input[type="text"]');
  inputs.forEach((input) => {
    input.classList.add(
      "block",
      "w-full",
      "rounded-lg",
      "border-2",
      "border-gray-300",
      "p-2",
      "focus:border-gray-900",
      "focus:outline-none",
    );
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.classList.add(
      "me-2",
      "rounded-lg",
      "border",
      "border-gray-200",
      "px-5",
      "py-2.5",
      "text-sm",
      "font-medium",
      "text-gray-900",
      "hover:opacity-75",
      "hover:text-white",
      "focus:z-10",
      "focus:ring-4",
      "focus:ring-gray-100",
      "focus:outline-none",
    );
  });
});

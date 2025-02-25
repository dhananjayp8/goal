function toggleGoalInput() {
  var goalSelect = document.getElementById("goal-select");
  var goalInputContainer = document.getElementById("goal-input-container");

  if (goalSelect.value === "addGoal") {
    goalInputContainer.style.display = "block";
  } else {
    goalInputContainer.style.display = "none";
  }
}
function toggleStrategyInput() {
  const strategySelect = document.getElementById("strategy-select");
  const strategyInputContainer = document.getElementById(
    "strategy-input-container"
  );
  const strategyInput = document.getElementById("strategy-input");

  if (strategySelect.value === "add-own") {
    strategyInputContainer.classList.remove("hidden");
    strategyInput.setAttribute("required", "true"); // Make input mandatory
  } else {
    strategyInputContainer.classList.add("hidden");
    strategyInput.removeAttribute("required"); // Remove required if not selected
  }
}

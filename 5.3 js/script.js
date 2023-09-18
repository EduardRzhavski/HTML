function passwordStrength(password) {
    if (password.length > 7) {
      return "Strong";
    } else {
      return "Weak";
    }
  }

  function passwordStrength(password) {
    return password.length > 7 ? "Strong" : "Weak";
  }

  function passwordStrength(password) {
    return password.length > 7 && "Strong" || "Weak";
  }

  function advancedPasswordStrength(password) {
    if (password.length > 7 && /[A-Z]/.test(password)) {
      return "Very Strong";
    } else if (password.length === 7) {
      return "Strong";
    } else {
      return "Weak";
    }
  }
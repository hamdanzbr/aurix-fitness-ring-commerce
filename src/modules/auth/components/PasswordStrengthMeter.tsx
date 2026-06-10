type PasswordStrengthMeterProps = {
  password: string;
};

function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
  const getStrength = () => {
    let score = 0;

    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const score = getStrength();

  const label = score <= 1 ? "Weak" : score <= 3 ? "Fair" : "Strong";

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-1.5">
      {[1, 2, 3].map((item) => (
        <span
          key={item}
          className={`h-0.5 rounded-full ${
            score >= item ? "bg-[#4aa3ff]" : "bg-white/[0.12]"
          }`}
        />
      ))}

      <span className="text-[0.62rem] font-semibold text-white/55">
        {label}
      </span>
    </div>
  );
}

export default PasswordStrengthMeter;
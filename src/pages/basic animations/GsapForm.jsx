import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const GsapForm = () => {
  const formRef = useRef(null);
  const formFieldsRef = useRef(null);
  const formTitleRef = useRef(null);
  const buttonRef = useRef(null);
  const successMessageRef = useRef(null);
  const backgroundShapesRef = useRef(null);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    plan: "basic",
  });

  const [fieldFocus, setFieldFocus] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  // Handle form field focus
  const handleFocus = (field) => {
    setFieldFocus((prev) => ({
      ...prev,
      [field]: true,
    }));

    // Animate label and input on focus
    gsap.to(`.form-group.${field} .form-label`, {
      y: -25,
      scale: 0.85,
      color: "#4ade80",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(`.form-group.${field} .form-input`, {
      borderColor: "#4ade80",
      boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)",
      duration: 0.4,
    });

    // Animate the background shape
    gsap.to(`.${field}-bg-shape`, {
      scale: 1.2,
      opacity: 0.2,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  // Handle form field blur
  const handleBlur = (field) => {
    setFieldFocus((prev) => ({
      ...prev,
      [field]: false,
    }));

    // Only animate label back if field is empty
    if (!formState[field]) {
      gsap.to(`.form-group.${field} .form-label`, {
        y: 0,
        scale: 1,
        color: "rgba(255, 255, 255, 0.7)",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // Reset border and box shadow
    gsap.to(`.form-group.${field} .form-input`, {
      borderColor: formErrors[field] ? "#f87171" : "rgba(74, 222, 128, 0.3)",
      boxShadow: formErrors[field]
        ? "0 0 15px rgba(248, 113, 113, 0.3)"
        : "none",
      duration: 0.4,
    });

    // Reset the background shape
    gsap.to(`.${field}-bg-shape`, {
      scale: 1,
      opacity: 0.05,
      duration: 1,
      ease: "power2.out",
    });
  };

  // Validate form
  const validateForm = () => {
    const errors = {};

    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!formState.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const errors = validateForm();
    setFormErrors(errors);

    // Check if there are any errors
    if (Object.keys(errors).length === 0) {
      // Animate button while "processing"
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.2,
      });

      gsap.to(".button-text", {
        opacity: 0,
        y: -10,
        duration: 0.2,
      });

      gsap.to(".loading-spinner", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        delay: 0.1,
      });

      // Simulate API call with timeout
      setTimeout(() => {
        // Success animation
        gsap.to(formFieldsRef.current, {
          y: 40,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.in",
        });

        gsap.to(buttonRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
        });

        gsap.to(successMessageRef.current, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "elastic.out(1, 0.5)",
        });

        // Add confetti-like particles
        createParticles();

        // Set submitted state to true
        setSubmitted(true);
      }, 1500);
    } else {
      // Shake effect for fields with errors
      Object.keys(errors).forEach((field) => {
        gsap.to(`.form-group.${field}`, {
          x: [-10, 10, -5, 5, 0],
          duration: 0.4,
          ease: "power2.inOut",
        });

        gsap.to(`.form-group.${field} .form-input`, {
          borderColor: "#f87171",
          duration: 0.4,
        });

        gsap.to(`.form-error.${field}`, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
      });
    }
  };

  // Create confetti-like particles
  const createParticles = () => {
    const container = backgroundShapesRef.current;
    const colors = ["#4ade80", "#38bdf8", "#a78bfa", "#fb923c"];

    for (let i = 0; i < 40; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 rounded-full";
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.top = "60%";
      particle.style.left = "50%";
      container.appendChild(particle);

      gsap.to(particle, {
        x: gsap.utils.random(-300, 300),
        y: gsap.utils.random(-400, -100),
        opacity: 0,
        scale: gsap.utils.random(1, 3),
        duration: gsap.utils.random(1, 3),
        ease: "power1.out",
        onComplete: () => {
          if (container.contains(particle)) {
            container.removeChild(particle);
          }
        },
      });
    }
  };

  // Reset form to try again
  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
      plan: "basic",
    });
    setFormErrors({});
    setSubmitted(false);

    // Reset animations
    gsap.set(formFieldsRef.current.children, {
      y: 0,
      opacity: 1,
    });

    gsap.set(buttonRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
    });

    gsap.set(".button-text", {
      opacity: 1,
      y: 0,
    });

    gsap.set(".loading-spinner", {
      opacity: 0,
      scale: 0,
    });

    gsap.set(successMessageRef.current, {
      scale: 0.5,
      opacity: 0,
      y: 20,
    });

    // Reset all labels
    Object.keys(formState).forEach((field) => {
      if (field !== "plan") {
        gsap.set(`.form-group.${field} .form-label`, {
          y: 0,
          scale: 1,
          color: "rgba(255, 255, 255, 0.7)",
        });

        gsap.set(`.form-group.${field} .form-input`, {
          borderColor: "rgba(74, 222, 128, 0.3)",
          boxShadow: "none",
        });
      }
    });
  };

  // Initialize GSAP animations
  useGSAP(() => {
    // Initial form fade in animation
    gsap.from(".form-title", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(formFieldsRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.3,
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.8,
    });

    // Animate background shapes
    const shapes = backgroundShapesRef.current.children;
    gsap.from(shapes, {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "elastic.out(1, 0.3)",
      delay: 0.2,
    });

    gsap.to(shapes, {
      rotation: "+=360",
      repeat: -1,
      duration: 40,
      ease: "none",
    });

    // Set initial state for success message
    gsap.set(successMessageRef.current, {
      scale: 0.5,
      opacity: 0,
      y: 20,
    });
  }, []);

  // Update label positions for filled inputs on initial render
  useEffect(() => {
    Object.keys(formState).forEach((field) => {
      if (formState[field] && field !== "plan") {
        gsap.set(`.form-group.${field} .form-label`, {
          y: -25,
          scale: 0.85,
          color: "#4ade80",
        });
      }
    });
  }, []);

  return (
    <main className="p-0">
      <div className="p-10">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="header-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </Link>
        </div>

        <h1 className="form-title text-3xl md:text-4xl font-bold text-white mb-4">
          GSAP Animated <span className="text-green-400">Form</span>
        </h1>

        <p className="text-gray-400 mb-8 max-w-3xl">
          A modern, interactive form with smooth animations powered by GSAP.
          Perfect for sign-ups, contact forms, or any user input. Features
          include animated field focus effects, validation animations, and a
          satisfying submit experience.
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Background animated shapes */}
          <div
            ref={backgroundShapesRef}
            className="absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="name-bg-shape absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-green-500/5 blur-3xl"></div>
            <div className="email-bg-shape absolute top-[40%] right-[10%] w-72 h-72 rounded-full bg-blue-500/5 blur-3xl"></div>
            <div className="message-bg-shape absolute bottom-[20%] left-[20%] w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"></div>
          </div>

          {/* Form container */}
          <div
            ref={formRef}
            className="relative bg-zinc-900/70 backdrop-blur-lg rounded-xl border border-green-500/20 p-8 overflow-hidden"
          >
            {!submitted ? (
              <>
                {/* Actual form */}
                <form onSubmit={handleSubmit}>
                  <div ref={formFieldsRef}>
                    {/* Name input */}
                    <div className="form-group name mb-6 relative">
                      <label
                        className="form-label absolute left-4 top-[15px] text-white/70 transition-all duration-300 pointer-events-none"
                        htmlFor="name"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="form-input w-full bg-zinc-800/50 border border-green-500/30 rounded-lg p-4 pt-5 text-white focus:outline-none transition-all duration-300"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={() => handleBlur("name")}
                      />
                      {formErrors.name && (
                        <div className="form-error name text-red-400 mt-2 text-sm">
                          {formErrors.name}
                        </div>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="form-group email mb-6 relative">
                      <label
                        className="form-label absolute left-4 top-[15px] text-white/70 transition-all duration-300 pointer-events-none"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-input w-full bg-zinc-800/50 border border-green-500/30 rounded-lg p-4 pt-5 text-white focus:outline-none transition-all duration-300"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={() => handleBlur("email")}
                      />
                      {formErrors.email && (
                        <div className="form-error email text-red-400 mt-2 text-sm">
                          {formErrors.email}
                        </div>
                      )}
                    </div>

                    {/* Plan selection */}
                    <div className="mb-6">
                      <label className="block text-white mb-2">
                        Select Plan
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {["basic", "pro", "premium"].map((plan) => (
                          <div
                            key={plan}
                            className={`cursor-pointer rounded-lg border p-4 text-center transition-all duration-300 ${
                              formState.plan === plan
                                ? "border-green-500 bg-green-500/20"
                                : "border-zinc-600 bg-zinc-800/50 hover:bg-zinc-700/50"
                            }`}
                            onClick={() =>
                              setFormState((prev) => ({ ...prev, plan }))
                            }
                          >
                            <div className="mb-2">
                              {plan === "basic" && "🚀"}
                              {plan === "pro" && "⚡"}
                              {plan === "premium" && "💎"}
                            </div>
                            <div className="text-white font-medium capitalize">
                              {plan}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="form-group message mb-6 relative">
                      <label
                        className="form-label absolute left-4 top-[15px] text-white/70 transition-all duration-300 pointer-events-none"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="form-input w-full bg-zinc-800/50 border border-green-500/30 rounded-lg p-4 pt-5 text-white focus:outline-none transition-all duration-300 resize-none"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message")}
                      ></textarea>
                      {formErrors.message && (
                        <div className="form-error message text-red-400 mt-2 text-sm">
                          {formErrors.message}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    ref={buttonRef}
                    type="submit"
                    className="w-full relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
                  >
                    <span className="button-text relative z-10">Submit</span>
                    <div className="loading-spinner absolute inset-0 flex items-center justify-center opacity-0 scale-0">
                      <svg
                        className="animate-spin h-6 w-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* Success message */}
                <div ref={successMessageRef} className="text-center py-10">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Your message has been submitted successfully.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-zinc-800 border border-green-500/30 text-white font-medium py-2 px-6 rounded-lg hover:bg-zinc-700 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Code preview section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 mb-6">
            This form uses GSAP animations for field focus effects, validation,
            and submission animations. Key techniques include:
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2 mb-8">
            <li>Staggered entrance animations for form fields</li>
            <li>Interactive focus effects with animated labels</li>
            <li>Validation with error shake animations</li>
            <li>Success state transitions with particle effects</li>
            <li>Background shape animations for depth</li>
          </ul>

          <div className="bg-zinc-900/50 border border-green-500/20 rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-3">
              Key Animation Code
            </h3>
            <pre className="bg-zinc-800/80 p-4 rounded-lg text-green-400 overflow-x-auto text-xs md:text-sm">
              {`// Animation for field focus
const handleFocus = (field) => {
  gsap.to(\`.form-group.\${field} .form-label\`, {
    y: -25,
    scale: 0.85,
    color: "#4ade80",
    duration: 0.3,
    ease: "power2.out",
  });
  
  gsap.to(\`.form-group.\${field} .form-input\`, {
    borderColor: "#4ade80",
    boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)",
    duration: 0.4,
  });
};

// Success animation after form submission
const handleSubmit = () => {
  // Validate form first...
  
  // Form fields fade out
  gsap.to(formFieldsRef.current, {
    y: 40,
    opacity: 0,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.in",
  });
  
  // Success message appears
  gsap.to(successMessageRef.current, {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.5,
    ease: "elastic.out(1, 0.5)",
  });
};`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GsapForm;

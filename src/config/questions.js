// src/config/questions.js (9-Page Contextual Flow - Generalized Tense)
export const questionnaireData = [
  // SECTION 1: VISION & EMOTIONAL BRIDGE 
  
  // CONTEXT PAGE 1: SENSORY SIMULATION (Future Tense / Aspiration)
  {
    step: 1,
    title: "🧭 The 3-Year Sensory Simulation",
    intro: "Establish your North Star by focusing purely on the sensory details of your ideal future life.",
    fields: [
      { id: "s1_see", type: "text", label: "What is the first thing you see? (Color, light, object)" },
      { id: "s1_smell", type: "text", label: "What is the first thing you smell?" },
      { id: "s1_sensory_details", type: "textarea", label: "Future Morning Details: Write 3 specific sensory details about this future morning." },
    ]
  },

  // CONTEXT PAGE 2: EMOTIONAL REALITY BRIDGE (Future/Solved Tense)
  {
    step: 2,
    title: "🌉 Emotional Reality Bridge",
    intro: "Identify a current general emotional load and visualize the physical relief of having already solved it.",
    fields: [
      { id: "s1_stressor", type: "text", label: "Current Major Stressor: Identify one chronic stressor you feel (e.g., Debt anxiety)." },
      { id: "s1_future_body_feel", type: "text", label: "Solved State: Imagine your Future Self has permanently solved this. How does it feel?" },
      { id: "s1_relief_feeling", type: "textarea", label: "Describe the feeling of physical relief in detail." },
    ]
  },
  
  // SECTION 2: THE ENERGY & HABIT SYSTEMS
  
  // CONTEXT PAGE 3: ENERGY MAPPING & FIX (General/Past Pattern Tense)
  {
    step: 3,
    title: "🟢 Energy Audit: Mapping & Fixing Leaks",
    intro: "Identify both your high-flow (Green) activities and your most draining (Red) activities, then plan immediate actions to manage them.",
    fields: [
      { id: "s2_green_zone", type: "textarea", label: "The Zone of Genius (Green): List 3 activities where time generally 'disappears' and you feel energized (Flow State)." },
      { id: "s2_increase_green", type: "textarea", label: "Green Zone Action Plan: How can we increase these activities by 10%?" },
      { id: "s2_red_zone", type: "textarea", label: "The Energy Leaks (Red): List 3 activities that generally leave you feeling drained, foggy, or irritable." },
      { id: "s2_manage_red", type: "textarea", label: "Delegation/Deletion: How can we delegate, delete, or gamify these draining Red Zone tasks?" },
    ]
  },
  
  // CONTEXT PAGE 4: DOPAMINE MENU (General Strategy Tense)
  {
    step: 4,
    title: "🍽️ The Dopamine Menu",
    intro: "Design your stimulation diet by categorizing boosters, deep flow work, and high-dopamine treats to limit.",
    fields: [
      { id: "s2_dopamine_appetizers", type: "textarea", label: "Appetizers (5 mins): List 3 quick boosters you can use to reset focus." },
      { id: "s2_dopamine_mains", type: "textarea", label: "Main Courses (1 hour): List 3 deep flow activities you engage in." },
      { id: "s2_dopamine_desserts", type: "textarea", label: "Desserts (Treats): List high-dopamine treats you frequently consume and want to limit." }
    ]
  },
  
  // SECTION 3: BARRIERS & DEFENSE
  
  // CONTEXT PAGE 5: RSD CHECK & DEFENSE (Pattern/General Tense)
  {
    step: 5,
    title: "🛡️ The RSD Reset: Emotional Defense",
    intro: "Manage emotional reactivity (RSD) by recognizing patterns and countering negative self-talk with factual evidence.",
    fields: [
      { id: "s3_rsd_check", type: "select", label: "RSD Check: Have you experienced sudden rage, shame, or hopelessness?", options: ["Yes", "No", "A little"] },
      { id: "s3_prosecution", type: "text", label: "Prosecution (The Negative Thought): e.g., 'I am lazy/useless.'" },
      { id: "s3_defense", type: "textarea", label: "Defense (The Evidence): List 3 facts that consistently prove you are capable." },
    ]
  },
  
  // CONTEXT PAGE 6: REFRACTORY PERIOD & NEEDS (General Pattern Tense)
  {
    step: 6,
    title: "🔗 Reframing Distraction & Unmet Needs",
    intro: "Analyze distraction not as failure, but as a signal of an unmet need (stimulation deficit).",
    fields: [
      { id: "s3_distraction", type: "text", label: "Distraction Audit: What types of distractions do you struggle with?" },
      { id: "s3_unmet_need", type: "select", label: "The Unmet Need: When you get distracted, is it typically because you are?", options: ["Bored (Under-stimulated)", "Overwhelmed (Over-stimulated)", "Neither"] },
      { id: "s3_plan", type: "textarea", label: "The Plan: Next time you feel this need, what healthy tool will you consistently use?" }
    ]
  },
  
  // SECTION 4: GAMIFICATION & SCAFFOLDING
  
  // CONTEXT PAGE 7: GAMIFICATION (Quest & Loot) (Future/Strategy Tense)
  {
    step: 7,
    title: "🎮 Gamification & Habit Design",
    intro: "We replace 'Discipline' with strategic 'Game Design' to motivate difficult tasks.",
    fields: [
      { id: "s4_quest_name", type: "text", label: "Quest Design: Pick any hard task. Rename it as a 'Quest' (e.g., 'The Laundry Dungeon')." },
      { id: "s4_loot", type: "text", label: "The Loot: What is the immediate, sensory reward for finishing?" },
      { id: "s4_scaffolding", type: "textarea", label: "The Scaffolding: What is one physical barrier you can remove right now to make the habit easier?" },
      { id: "s4_body_double", type: "text", label: "The Body Double: Who can you work alongside to anchor your focus?" }
    ]
  },

  // SECTION 5: IDENTITY & NEXT MAP
  
  // CONTEXT PAGE 8: IDENTITY & NEXT STEPS (Future/Action Tense)
  {
    step: 8,
    title: "👤 Identity & Future Map",
    intro: "Establish the identity that defines success and define the immediate physical actions required to move forward.",
    fields: [
      { id: "s1_verb_identity", type: "textarea", label: "The Verb Identity: Complete the sentence: 'I am the kind of person who...' (Focus on small daily actions)." },
      { id: "s5_north_star", type: "text", label: "The North Star: What is the general direction/feeling you want? (e.g., 'Creative Freedom')." },
      { id: "s5_next_step_description", type: "display", label: "The Next 3 Steps", description: "Forget the middle. What are the immediate next 3 physical actions required?" },
      { id: "s5_next_step_1", type: "text", label: "Step 1" },
      { id: "s5_next_step_2", type: "text", label: "Step 2" },
      { id: "s5_next_step_3", type: "text", label: "Step 3" },
    ]
  },
  
  // SECTION 6: REFLECTION & CONTROL
  
  // CONTEXT PAGE 9: LAB REPORT & CIRCLES OF CONTROL (Generalized Reflection Tense)
  {
    step: 9,
    title: "🧪 Lab Report & Circles of Control",
    intro: "We use 'Data' and experimentation instead of self-judgment to improve systems.",
    fields: [
      { id: "s5_control", type: "textarea", label: "1. Center Circle: What can you consistently control in your life?" },
      { id: "s5_worry", type: "textarea", label: "2. Outer Circle: What are you worried about but cannot control? (Practice letting go)." },
      { id: "s6_wins", type: "textarea", label: "3. The Data Log: What are some systems or actions that are going well for you? (Wins)." },
      { id: "s6_stuck", type: "textarea", label: "4. The Data Log: Where do you get stuck? (The 'Variables' - Tired? Hungry? No clear step?)." },
      { id: "s6_tweak", type: "textarea", label: "5. The Experiment: Based on this data, what one small 'System Tweak' will you try next?" }
    ]
  },
];
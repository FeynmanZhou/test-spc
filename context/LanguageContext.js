import { createContext, useContext, useState } from 'react';

// 创建所有页面的翻译文本
export const translations = {
  en: {
    // Navbar translations
    products: "Products",
    features: "Features",
    pricing: "Pricing",
    contact: "Contact",
    signin: "Sign in",
    tryFree: "Try it free",
    posts: "Posts",
    
    // Hero section
    heroTitle: "HiTalker",
    heroSubtitle: "AI Presentation Coach for Every Speaker",
    heroDescription: "An end-to-end evaluation platform for public speech and presentation rehearsal, get real-time feedback, refine your delivery, and inspire any audience. From a beginner to presentation master!",
    
    // VisualFeatures section
    visualTitle: "Improve your presentation and public speaking skills with AI",
    visualDescription: "Analyze your performance through pronunciation, filler words, vocabulary, pace, and body language. AI-driven coach provides insights to polish your performance and get tailored guidance to amplify your impact on the stage.",
    featuresTitles: [
      "Speech Evaluator",
      "PPT Evaluator"
    ],
    featuresDesc: [
      "Provide an AI avatar with comprehensive report to improve clarity, accuracy, and fluency of your speech. It has been widely used in Toastmasters clubs, Public Speaking Training, and English Training",
      "Increase your presentation rehearsal efficiency with AI-generated key message, performance analysis metrics, fine-tuned content."
    ],
    
    // Pricing section
    pricingTitle: "Get started with advanced features to improve your skills! Pay as you go",
    plans: [
      {
        name: "Free",
        desc: "200 AI Coins",
        price: "0",
        features: [
          "200 chats",
          "20 minutes speeches",
          "2 minutes avatars"
        ]
      },
      {
        name: "Standard",
        desc: "500 AI Coins",
        price: "39",
        features: [
          "500 chats",
          "50 minutes speeches",
          "5 minutes avatars"
        ]
      },
      {
        name: "Monthly",
        desc: "3000 AI Coins",
        price: "99",
        features: [
          "3000 chats",
          "30 minutes speeches",
          "30 minutes avatars"
        ]
      },
      {
        name: "Seasonally",
        desc: "10000 AI Coins",
        price: "249",
        features: [
          "10000 chats",
          "1000 minutes speeches",
          "100 minutes avatars"
        ]
      }
    ],
    selectPlan: "Select plan",
    
    // Contact section
    contactTitle: "Get In Touch",
    contactDesc: "Please fill out the form below to send us an email and we will get back to you as soon as possible.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    sendMessage: "Send Message",
    thanksFeedback: "Thanks for the feedback!",
    errorName: "Please enter your name",
    errorEmail: "Please enter a valid email",
    errorMessage: "Please enter your message",
    errorSubmit: "Failed to submit. Please try again.",
    sending: "Sending...",
  },
  zh: {
    // Navbar translations
    products: "产品",
    features: "功能",
    pricing: "价格",
    contact: "联系我们",
    signin: "登录",
    tryFree: "免费试用",
    posts: "活动",
    
    // Hero section
    heroTitle: "HiTalker",
    heroSubtitle: "人人都能用的AI演讲教练",
    heroDescription: "一个端到端的公开演讲和演示练习评估平台，获取实时反馈，提升表达能力，激励任何听众。从初学者到演讲大师！",
    
    // VisualFeatures section
    visualTitle: "用AI提升你的演讲和表达能力",
    visualDescription: "通过发音、填充词、词汇、语速和肢体语言分析你的表现。AI驱动的教练提供见解，完善你的表现，获得量身定制的指导，在舞台上放大你的影响力。",
    featuresTitles: [
      "演讲评估",
      "PPT评估"
    ],
    featuresDesc: [
      "提供AI虚拟人和综合报告，提高演讲的清晰度、准确性和流畅度。广泛应用于演讲俱乐部、公开演讲培训和英语培训",
      "通过AI生成的关键信息、表现分析指标和优化内容，提高演示排练效率"
    ],
    
    // Pricing section
    pricingTitle: "开启进阶功能提升你的技能！按需付费",
    plans: [
      {
        name: "免费版",
        desc: "200 AI币",
        price: "0",
        features: [
          "200次对话",
          "20分钟语音",
          "2分钟虚拟人"
        ]
      },
      {
        name: "标准版",
        desc: "500 AI币",
        price: "39",
        features: [
          "500次对话",
          "50分钟语音",
          "5分钟虚拟人"
        ]
      },
      {
        name: "包月版",
        desc: "3000 AI币",
        price: "99",
        features: [
          "3000次对话",
          "30分钟语音",
          "30分钟虚拟人"
        ]
      },
      {
        name: "包季版",
        desc: "10000 AI币",
        price: "249",
        features: [
          "10000次对话",
          "1000分钟语音",
          "100分钟虚拟人"
        ]
      }
    ],
    selectPlan: "选择方案",
    
    // Contact section
    contactTitle: "联系我们",
    contactDesc: "请填写下面的表单向我们发送邮件，我们会尽快回复您。",
    formName: "姓名",
    formEmail: "邮箱",
    formMessage: "留言",
    sendMessage: "发送消息",
    thanksFeedback: "感谢您的反馈！",
    errorName: "请输入您的姓名",
    errorEmail: "请输入有效的邮箱地址",
    errorMessage: "请输入您的留言",
    errorSubmit: "提交失败，请重试",
    sending: "发送中...",
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    t: (key) => {
      // 支持嵌套键值访问，如 "contactForm.name"
      return key.split('.').reduce((obj, k) => obj?.[k], translations[language]) || key;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 
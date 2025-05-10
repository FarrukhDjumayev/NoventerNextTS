type ServiceDetail = {
    title: string;
    features: { title: string; description: string }[];
    details: {
      texnik: string;
      sahifaSoni: string;
      dizayn: string;
    };
    image: string;
  };
  
  export const serviceDetails: Record<string, ServiceDetail> = {
    "landing-sahifalar": {
      title: "Landing sahifalar",
      features: [
        {
          title: "Qisqa va ta'sirli",
          description:
            "Mijozni birinchi qarashda qiziqtiradigan va keyingi qadamlarga undaydigan asosiy ma'lumotlar beriladi.",
        },
        {
          title: "Maqsadli",
          description:
            "Aniq harakatga yo'naltirilgan dizayn va kontent, foydalanuvchini kerakli amaliyotga undaydi.",
        },
        {
          title: "Tez yuklanuvchi",
          description:
            "Maksimal optimizatsiya orqali tez yuklanadigan sahifalar, foydalanuvchi tajribasini oshirish uchun.",
        },
      ],
      details: {
        texnik: "1 kun ichida tayyorlab beriladi",
        sahifaSoni: "1 (har bir sahifa minimum 5 ta qismdan iborat)",
        dizayn: "10–15 soatlik mehnat talab etiladi",
      },
      image: "/images/services/landing-page.png", // bu rasm sizning public papkangizda bo'lishi kerak
    },
  
    // Qo'shimcha xizmatlar uchun shular kabi bo'limlar qo'shiladi:
    // "korporativ-veb-sayt": { ... },
    // "online-dokon": { ... },
    // ...
  };
  
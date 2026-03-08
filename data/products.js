const products = [
  {
    id: 1,
    brand: "Ebrayn",
    name: "Oto Şampuanı 1 Litre",
    price: 149.99,
    oldPrice: 180,
    image: "/products/oto-sampuani.png",
    images: ["/products/oto-sampuani1.png"],
    category: ["dis-bakim"],
    description: "Ebrayn Oto Şampuan, özel formülü sayesinde aracınızın yüzeyine zarar vermeden temizler. Köpük yapısı ile kolayca durulanır ve geride iz bırakmaz. Aracınızın rengini canlandırarak, ona canlılık katar. Kullanımı son derece pratik ve keyiflidir.",
    features: [
      "Kir ve lekeleri derinlemesine temizler.",
      "Boya yüzeyine zarar vermeden parlaklık kazandırır.",
      "1000 ML",
      "Hızlıca durulanır ve iz bırakmaz.",
    ],
    usage: "Bir kova suya yaklaşık 2-3 kapak şampuan ilave ederek köpürtün. Yumuşak bir yıkama eldiveni veya sünger yardımıyla aracınızı yukarıdan aşağıya doğru yıkayın ve ardından bol su ile durulayarak kurulayın."
  },
  {
    id: 2,
    brand: "Ebrayn",
    name: "Torpido Parlatıcı Aerosol 220 ML",
    oldPrice: 240.00,
    price: 219.99,
    image: "/products/torpido-parlatici-aerosol.png",
    images: ["/products/torpido-parlatici-aerosol1.png",],
    category: ["ic-bakim"],
    description: "Özel formülü ile torpido,tampon,kapı ve tavan panelleri,vinil plastikleri koruyup,parlatarak yeni bir görünüm verir. Aynı zamanda çatlamaların önlenmesine yardımcı olur.",
    features: ["Güneş ışıklarına karşı koruma", "Tozlanma geciktirme", "220 ML"],
    usage: "Uygulanacak yüzeyin tozunu aldıktan sonra spreyi 20-25 cm mesafeden eşit şekilde püskürtün. Ardından temiz ve kuru bir mikrofiber bez yardımıyla yüzeyi dairesel hareketlerle ovun."
  },
  {
    id: 3,
    brand: "Ebrayn",
    name: "Buğu Önleyici 220 ML",
    price: 145.00,
    image: "/products/bugu-onleyici.png",
    images: ["/products/bugu-onleyici1.png","/products/bugu-onleyici2.png"],
    category: ["ic-bakim", "cam-bakim"],
    description: "Otomobil, gözlük, ayna, kask v.b. cam yüzeylerinde oluşan buğulanmanın giderilmesine yardımcı olarak, güvenli bir sürüş sağlar.",
    features: ["Uzun süreli etki", "Tüm cam yüzeylere uygun", "220 ML"],
    usage: "Öncelikle camın iç yüzeyini iyice temizleyin. Ürünü camın iç kısmına püskürtün ve birkaç dakika bekledikten sonra temiz bir mikrofiber bez ile dairesel hareketlerle camın üzerine tamamen yayın."
  },
  {
    id: 4,
    brand: "Ebrayn",
    name: "Buz Çözücü 500 ML",
    oldPrice: 170.00,
    price: 149.99,
    image: "/products/buz-cozucu.png",
    images: ["/products/buz-cozucu1.png","/products/buz-cozucu2.png","/products/buz-cozucu3.png"],
    category: ["dis-bakim","cam-bakim"],
    description: "Araçların cam yüzeylerinde ve kapı fitillerinde oluşan buz kristallerini hızlı ve etkili bir şekilde çözmeye yardımcı olur.",
    features: ["Aynalarda ve sileceklerde etkili.", "Buzları saniyeler içinde çözer.", "500 ML"],
    usage: "Buzlanmış cam yüzeyine veya kapı kilidine yaklaşık 20 cm mesafeden püskürtün. Buzun çözülmesi için 2-3 dakika bekledikten sonra çözülen tabakayı bir bez veya silecek yardımıyla temizleyin."
  },
  
  {
    id: 5,
    brand: "Ebrayn",
    name: "Mikrofiber Cam Bezi 40*60",
    price: 197.99,
    image: "/products/cam-bezi.png",
    category: ["ic-bakim","cam-bakim","dis-bakim"],
    description: "Özel mikrofiber dokusu ile mükemmel emiş gücüne sahip, uzun ömürlü kullanım sunar.",
    features: ["Mükemmel Emiş Gücü", "Uzun Ömürlü", "40*60 Boyut"],
    usage: "Cam yüzeylerde dairesel hareketlerle kurulama ve temizlik için kullanın. En iyi sonuç için cam temizleyici ürünlerle beraber nemli veya kuru olarak kullanıma uygundur."
  },
  
  {
    id: 6,
    brand: "Ebrayn",
    name: "Seramik Wax & Cila Seti",
    oldPrice: 570.00,
    price: 549.99,
    image: "/products/cila-seti.png",
    images: ["/products/cila-seti1.png","/products/cila-seti2.png"],
    category: ["dis-bakim","setler"],
    description: "Aracınıza göz alıcı bir parlaklık verir. UV ışınları ve dış etkenlere karşı koruyucu şeffaf bir film tabakası oluşturur.",
    features: ["Yüzeyi Korur & Parlaklık Kazandırır.", "Uygulama seti içindedir."],
    usage: "Yıkanmış ve tamamen kurulanmış araca uygulayın. Uygulama süngeriyle ince bir tabaka halinde dairesel hareketlerle yayın, 5-10 dakika puslu bir tabaka oluşmasını bekleyip temiz mikrofiber bezle parlatın."
  },

  {
    id: 7,
    brand: "Nanowash",
    name: "Jant Temizleyici 500 ml – Güçlü Fren Tozu Çözücü Oto Jant Temizleme Spreyi",
    oldPrice: 230.00,
    price: 195.00,
    image: "/products/n-jant-temizleyici.png",
    images: ["/products/n-jant-temizleyici1.png","/products/n-jant-temizleyici2.png","/products/n-jant-temizleyici3.png"],
    category: ["dis-bakim"],
    description: "Araç jantlarında zamanla biriken fren tozu, yol kiri, yağ kalıntıları ve inatçı lekeler aracınızın görünümünü olumsuz etkiler. Nanowash MW Jant Temizleyici, özel formülü sayesinde zorlu kirleri hızlıca çözer ve jantlarınıza ilk günkü parlaklığını kazandırır. Güçlü aktif temizleyici bileşenleri sayesinde alüminyum, çelik ve alaşım jantlarda güvenle kullanılabilir. Düzenli kullanımda jant yüzeyinde biriken fren tozlarının oluşturduğu mat görünümü ortadan kaldırır",
    features: ["Zorlu fren tozlarını çözer", "Kir ve yağ kalıntılarını sökerek temizler","Jantlarda parlak ve temiz görünüm sağlar","Sprey formu sayesinde kolay uygulama","500 ml ekonomik kullanım"],
    usage: "Ürünü kuru veya hafif nemli jant yüzeyine püskürtün. 1–2 dakika bekleyin. Gerekirse yumuşak bir fırça ile destekleyin. Bol su ile durulayın. Daha etkili sonuç için jant fırçası ile uygulama önerilir."
  },

  {
    id: 8,
    brand: "Ebrayn",
    name: "Detay Fırçası 3'lü",
    price: 96.90,
    image: "/products/detay-fircasi-3.png",
    category: ["ic-bakim","dis-bakim"],
    description: "3 farklı boyutta yumuşak yapılı detay fırçası. Çizmeden detaylı temizlik imkanı sunar.",
    features: ["3 Farklı Boy", "Yumuşak ve pürüzsüz fırça yapısı"],
    usage: "Uygun temizleyiciyi yüzeye veya fırçaya uygulayın. Izgaralar, düğmeler veya dar aralıklar gibi ulaşılması zor yerleri dairesel hareketlerle fırçalayın ve ardından bir bezle kalıntıları temizleyin."
  },
  
  {
    id: 9,
    brand: "Ebrayn",
    name: "Detay Fırçası 5'li",
    price: 135.99,
    image: "/products/detay-fircasi-5.png",
    category: ["ic-bakim","dis-bakim"],
    description: "5 farklı boyutta profesyonel detay fırçası seti. Her türlü dar alan temizliği için idealdir.",
    features: ["5 Farklı Boy", "Ultra ince ve yumuşak kıllar"],
    usage: "Temizlemek istediğiniz bölgeye uygun temizleme spreyi sıkın. Fırça yardımıyla kirleri yerinden oynatın ve mikrofiber bez kullanarak yüzeyi kurulayın."
  },
  
  {
    id: 10,
    brand: "Ebrayn",
    name: "Genel Temizleyici 1 Litre",
    oldPrice: 180.00,
    price: 175.99,
    image: "/products/genel-temizleyici.png",
    category: ["ic-bakim","dis-bakim","cam-bakim"],
    description: "Tekstil, deri ve sert yüzeylerde güvenle kullanılabilen ortak çözüm temizleyici.",
    features: ["Güçlü Formül", "Tüm yüzeylerde kullanılır.", "1000 ML"],
    usage: "Temizlenecek yüzeye püskürtün ve kirin yoğunluğuna göre bir süre bekleyin. Bir fırça veya bez yardımıyla yüzeyi silin, gerekirse nemli bir bezle kalıntıları alarak kurulayın."
  },

  {
    id: 11,
    brand: "Ebrayn",
    name: "Hızlı Cila 500 ML",
    oldPrice: 150.00,
    price: 144.99,
    image: "/products/hizli-cila.png",
    images: ["/products/hizli-cila1.png","/products/hizli-cila2.png","/products/hizli-cila3.png"],
    category: ["dis-bakim"],
    description: "Boyaya canlılık ve parlaklık kazandırır, dış etkenlere karşı koruyucu bir katman oluşturur.",
    features: ["Uzun süreli etki", "Hızlı uygulama", "500 ML"],
    usage: "Temiz ve kuru araç yüzeyine bölgesel olarak püskürtün. Hemen ardından mikrofiber bir bez kullanarak yüzeye eşit şekilde yayın ve dairesel hareketlerle parlatın."
  },
  
  {
    id: 12,
    brand: "Ebrayn",
    name: "Jant Temizleyici 500 ML",
    oldPrice: 170.00,
    price: 159.99,
    image: "/products/jant-temizleyici.png",
    category: ["dis-bakim"],
    description: "Jantlardaki zift ve balata tozunu çözer. Tahripkar kimyasallar içermez.",
    features: ["Ağır kimyasallar içermez.", "500 ML"],
    usage: "Jant yüzeyi soğukken ürünü eşit şekilde püskürtün. Yaklaşık 2-3 dakika bekledikten sonra (kurumadan) bir fırça yardımıyla fırçalayın ve bol su ile durulayın."
  },

  {
    id: 13,
    brand: "Ebrayn",
    name: "Lastik Parlatıcı 500 ML",
    oldPrice: 140.00,
    price: 119.99,
    image: "/products/lastik-parlatici.png",
    images: ["/products/lastik-parlatici1.png","/products/lastik-parlatici2.png"],
    category: ["dis-bakim"],
    description: "Lastiklere uzun süreli siyahlık ve parlaklık verir. Toz tutmayı geciktiren antistatik formüllüdür.",
    features: ["Anti statik formül", "Kurumaya karşı koruma", "500 ML"],
    usage: "Yıkanmış ve kurulanmış lastik yanaklarına ürünü sünger veya aplikatör yardımıyla yayın. Doğal bir görünüm için kurumasını bekleyin; fazla ürün kalırsa bir bezle üzerinden geçebilirsiniz."
  },
  {
    id: 14,
    brand: "Ebrayn",
    name: "Lastik Parlatıcı Aerosol 500 ML",
    oldPrice: 300.00,
    price: 289.99,
    image: "/products/lastik-parlatici-aerosol.png",
    images: ["/products/lastik-parlatici-aerosol1.png","/products/lastik-parlatici-aerosol2.png","/products/lastik-parlatici-aerosol3.png"],
    category: ["dis-bakim"],
    description: "Hızlı ve pratik parlatma sunar. Lastikleri korur ve yeni bir görünüm kazandırır.",
    features: ["Hızlı Uygulama", "10-15 Gün Kalıcılık", "500 ML"],
    usage: "Lastikleri temizledikten sonra spreyi 20 cm mesafeden lastik yüzeyine püskürtün. Kendi kendine kurumaya bırakın, herhangi bir silme işlemi gerektirmez."
  },

  {
    id: 15,
    brand: "Nanowash",
    name: "Cam Temizleyici 500 ml – İz Bırakmayan Oto Cam Temizleme Spreyi | Buğu ve Kir Çözücü",
    oldPrice: 140.00,
    price: 115.00,
    image: "/products/n-cam-temizleyici.png",
    images: ["/products/n-cam-temizleyici1.png","/products/n-cam-temizleyici2.png","/products/n-cam-temizleyici3.png"],
    category: ["cam-bakim","ic-bakim"],
    description: "Araç camlarında oluşan toz, parmak izi, yağ kalıntısı ve yol kirleri hem görüş kalitesini düşürür hem de sürüş güvenliğini olumsuz etkiler. Nanowash MW Cam Temizleyici, özel geliştirilmiş formülü sayesinde cam yüzeylerde iz bırakmadan etkili temizlik sağlar. Ön cam, arka cam ve yan camlarda güvenle kullanılabilir. Cam yüzeyde hızlı kuruma özelliği sayesinde silme sonrası leke veya dalgalanma bırakmaz.",
    features: ["İz bırakmayan formül", "Hızlı kuruma özelliği","Buğu ve kir oluşumunu azaltmaya yardımcı","Sprey form ile pratik kullanım","500 ml ekonomik boy"],
    usage: "Cam yüzeye ürünü püskürtün. Temiz bir mikrofiber bez ile silin. Gerekirse kuru bez ile son parlatmayı yapın."
  },

  {
    id: 16,
    brand: "Ebrayn",
    name: "Motor Yağ Sökücü 500 ML",
    oldPrice: 260,
    price: 249.99,
    image: "/products/motor-yag-sokucu.png",
    images: ["/products/motor-yag-sokucu1.png"],
    category: ["dis-bakim"],
    description: "Motor üzerindeki yağ ve kirleri hızlıca çözer, koruyucu bir tabaka oluşturur.",
    features: ["Hızlı Çözüm", "Paslanmayı önleyici etki", "500 ML"],
    usage: "Motor tamamen soğukken kirli bölgelere 25 cm mesafeden püskürtün. Yaklaşık 3-5 dakika bekledikten sonra bir bez veya fırça ile temizleyin; gerekirse işlemi tekrarlayın."
  },
  {
    id: 17,
    brand: "Ebrayn",
    name: "Trimex Plastik Onarım & Yenileyici 200 ML",
    oldPrice: 140,
    price: 135.00,
    image: "/products/plastik-yenileyici.png",
    category: ["ic-bakim","dis-bakim"],
    description: "Plastik ve kauçuk yüzeyleri yenileyerek su iticilik kazandırır.",
    images: ["/products/plastik-yenileyici1.png","/products/plastik-yenileyici2.png"],
    features: ["Su iticilik", "Antistatik özellik", "200 ML"],
    usage: "Yüzeyi iyice temizleyip kuruladıktan sonra bir sünger üzerine az miktarda dökün. Eşit bir şekilde yüzeye yayın ve ardından temiz bir bez ile fazlalığı alarak parlatın."
  },
  
  {
    id: 18,
    brand: "Ebrayn",
    name: "Mikrofiber Tank Bezi 50*70",
    oldPrice: 380.00,
    price: 349.99,
    image: "/products/tank-bezi.png",
    category: ["ic-bakim"],
    description: "Geniş yüzeyiyle araç yıkama sonrası hızlı kurulama sağlar.",
    features: ["Mükemmel emiş gücü", "50*70 Boyut"],
    usage: "Yıkama sonrası ıslak yüzeyin üzerine yayın ve havluyu kendine doğru çekerek suyu emmesini sağlayın. En hızlı sonuç için dairesel olmayan hareketlerle uygulayın."
  },

  {
    id: 19,
    brand: "Ebrayn",
    name: "Torpido Parlatıcı Süt Silikon 200 ML",
    price: 155.00,
    image: "/products/torpido-parlatici.png",
    images: ["/products/torpido-parlatici1.png","/products/torpido-parlatici2.png","/products/torpido-parlatici3.png"],
    category: ["ic-bakim","setler"],
    description: "Plastikleri koruyup parlatır, UV ışınlarına karşı koruma sağlar.",
    features: ["UV Koruma", "Antistatik", "200 ML"],
    usage: "Ürünü beraberinde gelen süngere bir miktar dökün. Uygulama yapılacak torpido veya plastik yüzeye ince ve eşit bir tabaka halinde sürerek dairesel hareketlerle yayın."
  },
  {
    id: 20,
    brand: "Ebrayn",
    name: "Yağmur Kaydırıcı 250 ML",
    price: 179.99,
    image: "/products/yagmur-kaydirici.png",
    images: ["/products/yagmur-kaydirici1.png","/products/yagmur-kaydirici2.png"],
    category: ["dis-bakim","cam-bakim"],
    description: "Cam yüzeyde su itici film tabakası oluşturarak güvenli sürüş sağlar.",
    features: ["Su itici etki", "250 ML"],
    usage: "Öncelikle camı iyice temizleyin ve kurulayın. Ürünü cam yüzeye püskürtün, 2 dakika bekledikten sonra mikrofiber bir bezle dairesel hareketlerle iyice silin."
  },
  
  {
    id: 21,
    brand: "Ebrayn",
    name: "Oto Yıkama Eldiveni",
    price: 139.99,
    image: "/products/yikama-eldiveni.png",
    category: ["dis-bakim"],
    description: "Mikrofiber dokusuyla çizmeden yıkama ve cila uygulama imkanı sağlar.",
    features: ["Kir tutmaz", "Çift taraflı kullanım"],
    usage: "Şampuanlı kova içerisinde köpürtülerek kullanılır. Araç yıkarken yukarıdan aşağıya doğru hafif baskı ile uygulayın; her panelden sonra kova içinde temizlemeyi unutmayın."
  },
  {
    id: 22,
    brand: "Ebrayn",
    name: "Oto Yıkama Süngeri",
    price: 67.99,
    image: "/products/yikama-sungeri.png",
    category: ["dis-bakim"],
    description: "Yüksek su tutuşlu ve ergonomik yapılı dayanıklı sünger.",
    features: ["Yüksek su tutuşu", "Ergonomik yapı"],
    usage: "Şampuanlı suya batırarak köpürtün. Aracın her bölgesini dairesel hareketlerle nazikçe silerek yıkayın ve kirlendikçe temiz suyla durulayıp tekrar şampuanlayın."
  },

   {
    id: 23,
    brand: "Nanowash",
    name: "Seramik Etkili Hızlı Cila 500 ml – Yüksek Parlaklık & Su İtici Oto Sprey",
    oldPrice: 300.00,
    price: 240,
    image: "/products/n-hizli-cila.png",
    images: ["/products/n-hizli-cila1.png","/products/n-hizli-cila2.png","/products/n-hizli-cila3.png"],
    category: ["dis-bakim"],
    description: "Araç boyasında zamanla oluşan mat görünüm, su lekeleri ve yüzey kirleri aracın estetiğini azaltır. Nanowash MW Seramik Etkili Hızlı Cila, özel geliştirilmiş formülü sayesinde yüzeye anında parlaklık kazandırır ve su itici koruma sağlar. Sprey formu sayesinde pratik uygulama sunar. Araç yüzeyine uygulandıktan sonra boya üzerinde kaygan bir tabaka oluşturarak hem parlaklık hem de kısa süreli koruma sağlar.",
    features: ["Seramik etkili parlaklık", "Su itici (hydrophobic) yüzey etkisi","Islak ve derin parlak görünüm","Sprey form ile pratik kullanım","Boya yüzeyinde kayganlık sağlar","500 ml ekonomik boy"],
    usage: "Aracı yıkayıp kuruladıktan sonra uygulayınız. Ürünü yüzeye ince bir tabaka halinde püskürtün. Temiz mikrofiber bez ile yayın ve parlatın. En iyi sonuç için kapalı ortamda uygulama önerilir. "
  },

  {
    id: 24,
    brand: "Nanowash",
    name: "Lastik Parlatıcı 500 ml – Uzun Süreli Islak Görünüm & Siyahlatıcı Tire Shine Sprey",
    oldPrice: 290.00,
    price: 220.00,
    image: "/products/n-lastik-parlatici.png",
    images: ["/products/n-lastik-parlatici1.png","/products/n-lastik-parlatici2.png","/products/n-lastik-parlatici3.png"],
    category: ["dis-bakim"],
    description: "Zamanla güneş ışığı, yol koşulları ve yıkama işlemleri lastik yüzeyinin matlaşmasına ve solgun görünmesine neden olur. Nanowash MW Lastik Parlatıcı, özel formülü sayesinde lastiklere derin siyah ve ıslak görünüm kazandırır. Uygulama sonrası lastik yüzeyinde estetik ve canlı bir görünüm oluşur. Araç detay temizliği sonrası profesyonel bir bitiş sağlar.",
    features: ["Derin siyah görünüm sağlar", "Lastik yüzeyini canlandırır","Islak ve derin parlak görünüm","Sprey form ile kolay uygulama","500 ml ekonomik boy"],
    usage: "Lastik yüzeyini temizleyin ve kurulayın. Ürünü lastik yanak kısmına püskürtün. Sünger veya aplikatör ile yüzeye yayın. Fazlalığı temiz bez ile alabilirsiniz. En iyi sonuç için temiz ve kuru lastik yüzeyine uygulanması önerilir."
  },

  {
    id: 25,
    brand: "Nanowash",
    name: "Detay Temizleyici 500 ml – Araç İçi Genel Yüzey ve Torpido Temizleme Spreyi",
    oldPrice: 280.00,
    price: 210.00,
    image: "/products/n-detay-temizleyici.png",
    images: ["/products/n-detay-temizleyici1.png","/products/n-detay-temizleyici2.png","/products/n-detay-temizleyici3.png"],
    category: ["ic-bakim"],
    description: "Araç iç yüzeylerinde zamanla oluşan toz, kir, parmak izi ve hafif yağ kalıntıları hem estetik görünümü bozar hem de bakımsız bir his oluşturur. Nanowash MW Detay Temizleyici, araç iç trim, torpido ve plastik yüzeylerde etkili temizlik sağlar.Özel formülü sayesinde yüzeylerde kalıntı bırakmadan temizlik yapar ve doğal bir görünüm kazandırır.",
    features: ["Araç içi detay temizliği için ideal", "Torpido ve plastik yüzey temizleyici","İz bırakmadan temizlik","Sprey form ile kolay uygulama","500 ml ekonomik boy"],
    usage: "Ürünü temizlenecek yüzeye püskürtün. Mikrofiber bez ile silin. Gerekirse kuru bez ile son geçiş yapın."
  },

  {
    id: 26,
    brand: "Nanowash",
    name: "Torpido Parlatıcı 500 ml – Araç İçi Plastik ve Dashboard Parlatıcı Sprey",
    price: 250.00,
    image: "/products/n-torpido-parlatici.png",
    images: ["/products/n-torpido-parlatici1.png","/products/n-torpido-parlatici2.png","/products/n-torpido-parlatici3.png"],
    category: ["ic-bakim"],
    description: "Araç iç plastik yüzeyler zamanla matlaşabilir ve solgun bir görünüm alabilir. Nanowash MW Torpido Parlatıcı, torpido, konsol ve iç plastik yüzeylerde canlı ve bakımlı bir görünüm sağlar. Özel formülü sayesinde yüzey üzerinde estetik bir parlaklık oluşturur ve araç iç mekanına yenilenmiş bir görünüm kazandırır.",
    features: ["Torpido ve plastik yüzey parlatıcı", "Araç içi konsol ve trim uyumlu","Canlı ve bakımlı görünüm","Sprey form ile kolay uygulama","500 ml ekonomik boy"],
    usage: "Yüzeyi tozdan arındırın. Ürünü torpido veya plastik yüzeye püskürtün. Temiz bir bez ile eşit şekilde yayın. En iyi sonuç için temiz ve kuru yüzeye uygulanması önerilir."
  },

  {
    id: 27,
    brand: "Nanowash",
    name: "Demir Tozu Temizleyici 500 ml – Jant ve Boya Yüzeyi İçin Güçlü Pas Sökücü",
    price: 310.00,
    image: "/products/n-demir-tozu.png",
    images: ["/products/n-demir-tozu1.png","/products/n-demir-tozu2.png","/products/n-demir-tozu3.png"],
    category: ["dis-bakim"],
    description: "Araç jantlarında ve boya yüzeyinde zamanla biriken demir tozu, fren kalıntıları ve pas partikülleri sıradan temizlik ürünleri ile tamamen temizlenemez. Nanowash MW Demir Tozu Temizleyici, özel aktif formülü sayesinde yüzeye tutunan metal partikülleri çözerek derinlemesine temizlik sağlar. Jant yüzeyi ve araç boyasında güvenle kullanılabilir.",
    features: ["Demir tozu ve fren kalıntılarını çözer", "Pas partiküllerini arındırır","Jant ve boya yüzeyine uygundur","Sprey form ile kolay uygulama","500 ml ekonomik boy"],
    usage: "Ürünü temizlenecek jant veya boya yüzeyine püskürtün. 2–3 dakika bekleyin. Gerekirse yumuşak fırça ile destekleyin. Bol su ile durulayın."
  },

  {
    id: 28,
    brand: "Nanowash",
    name: "Torpido Bakım Kremi 500 ml – Araç İçi Plastik ve Konsol Besleyici Parlatıcı",
    price: 240.00,
    image: "/products/n-torpido-krem.png",
    images: ["/products/n-torpido-krem1.png","/products/n-torpido-krem2.png","/products/n-torpido-krem3.png"],
    category: ["ic-bakim"],
    description: "Araç iç plastik yüzeyler zamanla kuruyabilir, matlaşabilir ve solgun bir görünüm alabilir. Nanowash MW Torpido Bakım Kremi, özel formülü sayesinde torpido ve plastik yüzeylerde derin bakım sağlar. Krem formu sayesinde yüzeye daha yoğun temas ederek daha homojen bir uygulama sunar ve araç iç mekanına bakımlı bir görünüm kazandırır.",
    features: ["Torpido ve plastik yüzey bakım kremi", "Araç içi konsol ve trim uyumlu","Besleyici ve canlandırıcı etki","Krem form sayesinde kontrollü uygulama","500 ml ekonomik boy"],
    usage: "Yüzeyi temizleyin ve kurulayın. Ürünü sünger veya bez yardımıyla yüzeye uygulayın. Eşit şekilde yayın. Fazlalığı kuru bez ile alabilirsiniz. En iyi sonuç için temiz ve kuru yüzeye uygulanması önerilir."
  },

  {
    id: 29,
    brand: "Nanowash",
    name: "Jel Lastik Parlatıcı 500 ml – Yoğun ve Kalıcı Siyahlatıcı Gel Tire Polish",
    oldPrice: 320.00,
    price: 250.00,
    image: "/products/n-lastik-jel.png",
    images: ["/products/n-lastik-jel1.png","/products/n-lastik-jel2.png","/products/n-lastik-jel3.png"],
    category: ["dis-bakim"],
    description: "Araç lastiklerinde zamanla oluşan matlaşma ve solgun görünüm, aracın genel estetiğini olumsuz etkiler. Nanowash MW Jel Lastik Parlatıcı, yoğun jel formu sayesinde lastik yüzeyine daha güçlü tutunur ve daha kalıcı bir siyahlatıcı etki sağlar. Sprey ürünlere göre daha kontrollü uygulama sunar ve lastik yüzeyinde homojen dağılım sağlar.",
    features: ["Jel form sayesinde yoğun etki", "Lastiklere derin siyah ve parlak görünüm kazandırır","Uzun süreli parlaklık","Daha kontrollü uygulama","500 ml ekonomik boy"],
    usage: "Lastik yüzeyini temizleyin ve kurulayın. Jel ürünü sünger veya aplikatör yardımıyla lastik yanak kısmına uygulayın. Yüzeye eşit şekilde yayın. Fazla ürünü bez ile alabilirsiniz. En iyi sonuç için temiz ve kuru lastik yüzeyine uygulanması önerilir."
  },

  {
    id: 30,
    brand: "Nanowash",
    name: "Konsantre Oto Şampuanı 1 Litre – Yüksek Köpük ve Derin Temizlik",
    oldPrice: 320.00,
    price: 250.00,
    image: "/products/n-sampuan.png",
    images: ["/products/n-sampuan1.png","/products/n-sampuan2.png","/products/n-sampuan3.png"],
    category: ["dis-bakim"],
    description: "Araç yüzeyinde biriken toz, yol kiri ve çevresel kalıntılar sıradan deterjanlarla temizlendiğinde boya yüzeyine zarar verebilir. Nanowash Oto Şampuanı, araç yıkama için özel olarak geliştirilmiş formülü sayesinde etkili temizlik sağlar. Yoğun köpük yapısı sayesinde kirleri yüzeyden güvenli şekilde uzaklaştırmaya yardımcı olur ve yıkama sırasında daha kontrollü temizlik sunar.",
    features: ["Konsantre formül", "Yüksek köpük etkisi","Derin temizlik","Parlaklık kazandıran yapı","1 litre ekonomik boy"],
    usage: "Kovaya su ekleyin. Üründen uygun miktarda ekleyin. Sünger veya yıkama eldiveni ile aracı temizleyin. Bol su ile durulayın."
  },

  {
    id: 31,
    brand: "Nanowash",
    name: "Araç İçi Parfüm 400 ml – Kalıcı Oto Koku Spreyi (Ocean, Amber, Vanilla, Mystic, Infinity)",
    price: 280.00,
    image: "/products/n-koku.png",
    images: ["/products/n-koku1.png","/products/n-koku2.png","/products/n-koku3.png","/products/n-koku4.png","/products/n-koku5.png","/products/n-koku6.png"],
    category: ["ic-bakim"],
    description: "Araç içinde oluşan kötü kokular sürüş keyfini olumsuz etkiler. Nanowash Oto Parfüm, özel formülü sayesinde araç iç mekanında ferah, kalıcı ve dengeli bir koku sağlar. Sprey formu sayesinde torpido, koltuk altı, paspas ve araç içi hava alanlarında pratik şekilde uygulanabilir.",
    features: ["Sprey form ile kolay kullanım", "Kalıcı ve dengeli koku yayılımı","Araç içi kullanım için ideal","Profesyonel oto detay uygulamalarına uygun","400 ml büyük hacim"],
    usage: "Ürünü araç içi yüzeylere doğrudan sıkmayın. Paspas, koltuk altı veya hava sirkülasyon alanlarına püskürtün. İhtiyaca göre tekrar uygulama yapabilirsiniz."
  },

  {
    id: 32,
    brand: "Nanowash",
    name: "Aerosol Torpido Parlatıcı 500 ml – Plastik Yenileyici ve Parlatıcı",
    oldPrice: 350.00,
    price: 300,
    image: "/products/n-torpido-aerosol.png",
    images: ["/products/n-torpido-aerosol1.png","/products/n-torpido-aerosol2.png","/products/n-torpido-aerosol3.png"],
    category: ["ic-bakim"],
    description: "Araç içi plastik yüzeyler zamanla güneş ışığı ve kullanım nedeniyle matlaşır. Nanowash Torpido Parlatıcı Aerosol, özel formülü sayesinde kokpit ve plastik yüzeylere canlı, bakımlı ve estetik bir görünüm kazandırır. Aerosol formu sayesinde ürünü yüzeye eşit şekilde dağıtır ve homojen bir parlaklık sağlar.",
    features: ["Torpido ve plastik yüzeylerde etkili", "Matlaşmayı azaltmaya yardımcı olur","Canlı ve bakımlı görünüm sağlar","Kolay ve pratik uygulama","500 ml aerosol form"],
    usage: "Ürünü çalkalayın. 20-25 cm mesafeden yüzeye püskürtün. Temiz bez ile yayın. Fazlalığı mikrofiber bez ile alabilirsiniz."
  },

  {
    id: 33,
    brand: "Nanowash",
    name: "Aerosol Lastik Parlatıcı 500 ml – Derin Siyah ve Islak Görünüm",
    oldPrice: 350.00,
    price: 310,
    image: "/products/n-lastik-aerosol.png",
    images: ["/products/n-lastik-aerosol1.png","/products/n-lastik-aerosol2.png","/products/n-lastik-aerosol3.png"],
    category: ["dis-bakim"],
    description: "Güneş ışığı, yol koşulları ve yıkama işlemleri lastik yüzeyinin zamanla solmasına ve matlaşmasına neden olur. Nanowash Aerosol Lastik Parlatıcı, özel formülü sayesinde lastiklere derin siyah ve estetik ıslak görünüm kazandırır. Uygulama sonrası lastikler daha bakımlı, canlı ve dikkat çekici görünür. Araç detay temizliğinin en etkili tamamlayıcı ürünlerinden biridir.",
    features: ["Derin siyah görünüm", "Islak ve parlak bitiş","Homojen dağılım","Kolay ve pratik uygulama","500 ml aerosol form"],
    usage: "Ürünü iyice çalkalayın. 15-20 cm mesafeden lastik yanak kısmına püskürtün. Gerekirse sünger ile yayabilirsiniz. Fazla ürünü bez ile alabilirsiniz. En iyi sonuç için temiz ve kuru lastik yüzeyine uygulanması önerilir."
  },

  {
    id: 34,
    brand: "Nanowash",
    name: "Aerosol Motor Temizleyici 500 ml – Yağ ve Kir Çözücü",
    price: 310.00,
    image: "/products/n-motor-aerosol.png",
    images: ["/products/n-motor-aerosol1.png","/products/n-motor-aerosol2.png","/products/n-motor-aerosol3.png"],
    category: ["dis-bakim"],
    description: "Motor bölmesinde zamanla biriken yağ, toz ve kir kalıntıları hem estetik görünümü bozar hem de bakım işlemlerini zorlaştırır. Nanowash Motor Temizleyici, özel aerosol formülü sayesinde motor yüzeyindeki kir ve yağ kalıntılarını etkili şekilde çözmeye yardımcı olur. Aerosol formu sayesinde ürün yüzeye homojen şekilde yayılır ve ulaşılması zor alanlara kolayca nüfuz eder.",
    features: ["Motor yüzeyinde etkili temizlik", "Yağ ve kir çözücü yapı","Homojen dağılım","Kolay ve pratik uygulama","500 ml aerosol form"],
    usage: "Motor soğukken uygulama yapınız. Ürünü kirli yüzeye püskürtünüz. 1-2 dakika bekleyiniz. Gerekirse fırça ile destekleyiniz. Nemli bez ile siliniz veya düşük basınçlı su ile durulayınız. Elektrik aksamına doğrudan uygulama yapmaktan kaçınınız."
  },

  {
    id: 35,
    brand: "Nanowash",
    name: "Aerosol Detay Köpük Temizleyici 500 ml – İç Döşeme ve Plastik Temizleyici",
    price: 320.00,
    image: "/products/n-detay-aerosol.png",
    images: ["/products/n-detay-aerosol1.png","/products/n-detay-aerosol2.png","/products/n-detay-aerosol3.png"],
    category: ["ic-bakim"],
    description: "Araç içi yüzeylerde zamanla oluşan toz, lekeler ve kullanım izleri estetik görünümü bozar. Nanowash Detay Köpük Temizleyici, özel formülü sayesinde iç döşeme, plastik ve vinil yüzeylerde etkili temizlik sağlar. Köpük formu sayesinde kir yüzeyde tutunur ve daha kontrollü temizlik imkanı sunar.",
    features: ["İç döşeme ve plastik yüzeylere uygun", "Kontrollü köpük yapısı","Pratik ve hızlı uygulama","Profesyonel detay temizlik ürünü","500 ml aerosol köpük form"],
    usage: "Ürünü çalkalayın. Temizlenecek yüzeye köpüğü uygulayın. Birkaç dakika bekleyin. Mikrofiber bez veya fırça ile silin. Hassas yüzeylerde küçük bir alanda test edilmesi önerilir."
  },

  {
    id: 36,
    brand: "Nanowash",
    name: "Zift Söktürücü 500 ml – Zift ve Katran Lekesi Çözücü",
    price: 310.00,
    image: "/products/n-zift.png",
    images: ["/products/n-zift1.png","/products/n-zift2.png","/products/n-zift3.png"],
    category: ["dis-bakim"],
    description: "Uzun yol sürüşleri sonrası araç yüzeyinde oluşan zift, katran ve asfalt lekeleri standart oto şampuanları ile temizlenemez. Nanowash Zift Söktürücü, özel formülü sayesinde boya yüzeyine zarar vermeden bu inatçı kalıntıların çözülmesine yardımcı olur. Yüzeydeki siyah noktalar, yol katranı ve yapışkan kalıntılar için etkili bir çözümdür.",
    features: ["Zift ve katran lekelerinde etkili", "Boya yüzeyine zarar vermeden temizlik","Hızlı ve kontrollü uygulama","Profesyonel oto bakım ürünü","500 ml pratik sprey form"],
    usage: "Ürünü kuru yüzeye püskürtün. 1-2 dakika bekleyin. Mikrofiber bez ile silin. Gerekirse işlemi tekrarlayın. Uygulama sonrası yüzeyin yıkanması önerilir."
  },

  {
    id: 37,
    brand: "Nanowash",
    name: "Yapışkan İz Sökücü 500 ml – Sticker ve Bant Kalıntı Temizleyici",
    price: 300.00,
    image: "/products/n-yapiskan.png",
    images: ["/products/n-yapiskan1.png","/products/n-yapiskan2.png","/products/n-yapiskan3.png"],
    category: ["dis-bakim","ic-bakim"],
    description: "Araç yüzeylerinde sticker, bant, logo veya folyo sökümü sonrası oluşan yapışkan kalıntılar estetik görünümü bozar ve normal temizlik ürünleri ile çıkmaz. Nanowash Yapışkan İz Sökücü, özel formülü sayesinde yüzeye zarar vermeden yapışkan kalıntıların çözülmesine yardımcı olur.",
    features: ["Sticker ve bant kalıntılarında etkili", "Folyo söküm sonrası kullanım için ideal","Boya yüzeyine zarar vermeden temizlik","Profesyonel oto bakım ürünü","500 ml pratik sprey form"],
    usage: "Ürünü kuru yüzeye püskürtün. 1-2 dakika bekleyin. Mikrofiber bez ile silin. Gerekirse işlemi tekrarlayın. Hassas yüzeylerde küçük bir alanda test edilmesi önerilir."
  },

  {
    id: 38,
    brand: "Nanowash",
    name: "Kireç Lekesi Temizleyici 500 ml – Cam ve Boya Üzerindeki Su Lekesi Giderici",
    price: 530.00,
    image: "/products/n-kirec.png",
    images: ["/products/n-kirec1.png","/products/n-kirec2.png","/products/n-kirec3.png"],
    category: ["dis-bakim"],
    description: "Araç yıkama sonrası veya yağmurdan sonra araç yüzeyinde oluşan su ve kireç lekeleri zamanla boya ve cam yüzeyde iz bırakabilir. Nanowash Kireç Lekesi Temizleyici, özel formülü sayesinde cam, kaporta ve plastik yüzeylerde oluşan kireç ve su lekelerini çözmeye yardımcı olur.",
    features: ["Cam ve boya üzerindeki su lekelerinde etkili", "Kireç kalıntılarını çözmeye yardımcı olur","Profesyonel oto bakım ürünü","Kolay uygulama","500 ml konsantre formül"],
    usage: "Ürünü temizlenecek yüzeye uygulayın. 1-2 dakika bekleyin. Mikrofiber bez ile silin. Gerekirse uygulamayı tekrarlayın."
  },

  {
    id: 39,
    brand: "Autokey",
    name: "Fren Balata Temizleyici Sprey 500 ml – Güçlü Yağ ve Kir Çözücü Brake Cleaner",
    oldPrice: 430.00,
    price: 370.00,
    image: "/products/a-balata.png",
    images: ["/products/a-balata1.png","/products/a-balata2.png","/products/a-balata3.png"],
    category: ["dis-bakim"],
    description: "Autokey Fren Balata Spreyi, araç fren sistemlerinde biriken balata tozu, yağ ve kir kalıntılarını temizlemek için geliştirilmiş güçlü bir temizleyicidir. Fren diskleri, balatalar ve metal yüzeylerde oluşan kirleri hızlı şekilde çözmeye yardımcı olur ve fren sisteminin daha verimli çalışmasına katkı sağlar. Oto servisleri, ustalar ve araç bakım kullanıcıları tarafından tercih edilen pratik bir bakım ürünüdür.",
    features: ["Güçlü yağ ve kir çözücü formül", "Fren balata ve disk temizliği için ideal","Kalıntı bırakmadan temizlik","Profesyonel oto bakım ürünü","500 ml aerosol sprey"],
    usage: "Ürünü temizlenecek yüzeye püskürtün. Yağ ve kirlerin çözülmesini bekleyin. Gerekirse bez veya fırça ile temizleyin. Kurumasını bekleyin."
  },

  {
    id: 40,
    brand: "Autokey",
    name: "DR-40 Çok Amaçlı Bakım Spreyi 200 ml – Pas Sökücü, Yağlayıcı ve Koruyucu",
    price: 270.00,
    image: "/products/a-cokamac.png",
    images: ["/products/a-cokamac1.png","/products/a-cokamac2.png","/products/a-cokamac3.png"],
    category: ["dis-bakim"],
    description: "Autokey DR-40 Çok Amaçlı Bakım Spreyi, paslanmış ve sıkışmış mekanik parçaların açılmasına yardımcı olan, aynı zamanda yüzeyleri yağlayan ve koruyan çok yönlü bir bakım ürünüdür. Metal yüzeylerde oluşan pas ve kirin çözülmesine yardımcı olurken hareketli parçaların daha rahat çalışmasını sağlar. Ev, otomobil, motosiklet ve birçok mekanik ekipmanda güvenle kullanılabilir. Pratik aerosol formu sayesinde ulaşılması zor alanlara kolayca uygulanabilir.",
    features: ["Paslanmış ve sıkışmış parçaları açmaya yardımcı olur", "Çok amaçlı yağlama ve bakım sağlar","Metal yüzeyleri korumaya yardımcı olur","Günlük bakım ve tamir işlemleri için ideal","500 ml aerosol sprey"],
    usage: "Spreyi uygulamak istediğiniz yüzeye püskürtün. Etki etmesi için kısa süre bekleyin. Gerekirse bez veya fırça ile temizleyin. İhtiyaç halinde uygulamayı tekrarlayın."
  },

  {
    id: 41,
    brand: "Autokey",
    name: "Lastik Parlatıcı Jel 500 ml + Uygulama Süngeri – Kalıcı Parlaklık ve Koruma",
    price: 330.00,
    image: "/products/a-lastik-jel.png",
    images: ["/products/a-lastik-jel1.png","/products/a-lastik-jel2.png","/products/a-lastik-jel3.png"],
    category: ["dis-bakim"],
    description: "Autokey Lastik Parlatıcı Jel, araç lastiklerine derin siyah görünüm ve parlaklık kazandırmak için geliştirilmiş profesyonel bir bakım ürünüdür. Özel jel formülü sayesinde lastik yüzeyine kolayca uygulanır, yüzeye tutunarak uzun süreli parlaklık ve bakımlı bir görünüm sağlar. Ürün ile birlikte gelen uygulama süngeri sayesinde lastik yüzeyine pratik ve dengeli bir şekilde uygulanabilir.",
    features: ["Jel formülü sayesinde uzun süre kalıcı etki", "Lastiklere derin siyah ve parlak görünüm kazandırır","Lastik yüzeyinde bakımlı görünüm oluşturur","Kolay uygulama sağlayan sünger hediyeli","500 ml jel form"],
    usage: "Lastik yüzeyinin temiz ve kuru olduğundan emin olun. Ürünü uygulama süngeri ile lastik yüzeyine sürün. Tüm yüzeye eşit şekilde dağıtın. Daha parlak görünüm için uygulamayı tekrarlayabilirsiniz."
  },

  {
    id: 42,
    brand: "Auto Deepen",
    name: "Lastik Parlatıcı 500 ml – Tire Shine Sprey Lastik Parlatma ve Bakım Ürünü",
    oldPrice: 255.00,
    price: 200.00,
    image: "/products/ad-lastik.png",
    images: ["/products/ad-lastik1.png","/products/ad-lastik2.png","/products/ad-lastik3.png"],
    category: ["dis-bakim"],
    description: "Auto Deepen Lastik Parlatıcı, araç lastiklerine parlak ve bakımlı bir görünüm kazandırmak için geliştirilmiş pratik bir lastik bakım ürünüdür. Özel formülü sayesinde lastik yüzeyine kolayca uygulanır ve lastiklerin daha koyu, temiz ve parlak görünmesine yardımcı olur. Araç yıkama sonrası yapılan lastik bakımında profesyonel bir görünüm sağlar. Sprey formu sayesinde lastik yüzeyine hızlı ve kolay şekilde uygulanabilir.",
    features: ["Lastiklere parlak ve bakımlı görünüm kazandırır", "Kolay uygulanabilen sprey form","Lastik yüzeyinde bakımlı görünüm oluşturur","Kolay uygulama","500 ml pratik kullanım"],
    usage: "Lastik yüzeyinin temiz ve kuru olduğundan emin olun. Ürünü lastik yüzeyine eşit şekilde püskürtün. Gerekirse sünger veya bez ile yüzeye yayın. Daha parlak görünüm için uygulamayı tekrarlayabilirsiniz."
  },

  {
    id: 43,
    brand: "Auto Deepen",
    name: "Deri & Vinil Koruyucu Parlatıcı 200 ml – Sünger ve Temizleme Bezi Hediyeli",
    price: 220.00,
    image: "/products/ad-vinil.png",
    images: ["/products/ad-vinil1.png","/products/ad-vinil2.png","/products/ad-vinil3.png"],
    category: ["ic-bakim"],
    description: "Auto Deepen Deri ve Vinil Koruyucu Parlatıcı, araç iç mekanındaki deri, vinil ve plastik yüzeylerin temizlenmesine, korunmasına ve parlak bir görünüm kazanmasına yardımcı olan çok amaçlı bir bakım ürünüdür. Özel formülü sayesinde yüzeylerdeki mat görünümü gidererek daha canlı ve bakımlı bir görünüm sağlar. Araç içi yüzeylerin düzenli bakımında tercih edilen pratik bir üründür. Ürün ile birlikte gelen uygulama süngeri ve temizleme bezi sayesinde yüzeye kolay ve dengeli bir şekilde uygulanabilir.",
    features: ["Deri ve vinil yüzeyler için bakım ve koruma", "Plastik ve torpido yüzeylerde parlak görünüm","Uygulama süngeri ve temizleme bezi hediyeli","Araç iç mekan bakımına uygun formül","200 ml pratik kullanım"],
    usage: "Uygulama yapılacak yüzeyin temiz ve kuru olduğundan emin olun. Ürünü uygulama süngeri veya bez ile yüzeye sürün. Tüm yüzeye eşit şekilde dağıtın. Fazla ürünü temizleme bezi ile silebilirsiniz."
  },
];

export default products;
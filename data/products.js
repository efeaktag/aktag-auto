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
  /* ürün 7 yok eklenebilir */
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
  /*
  {
    id: 15,
    brand: "Ebrayn",
    name: "Mikrofiber Bez 50*70",
    oldPrice: 260,
    price: 220,
    image: "/products/mikrofiber-bez.png",
    category: ["ic-bakim","dis-bakim","cam-bakim"],
    description: "Tüm yüzeylerde mükemmel sonuç veren yüksek emiş gücüne sahip bez.",
    features: ["Her yüzeye uygun", "50*70 Boyut"],
    usage: "İç ve dış tüm temizlik işlemlerinde; cila parlatma veya genel kurulama için dairesel hareketlerle kullanın. Hem kuru hem nemli kullanım için uygundur."
  },*/

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
  
];

export default products;
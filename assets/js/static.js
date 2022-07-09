const services = [
    {
        icon: 'box',
        title: 'KAPASİTE BELİRLEME',
        desc: 'Yatırımcının belirlediği hedef kapasite ve imalat gamı doğrultusunda makine parkının ve adetlerinin seçimi',
    },
    {
        icon: 'bank',
        title: 'FİZİBİLİTE',
        desc: 'Belirlenen makine parkı ve tesisat ile ilgili kantitatif verilerin değerlendirerek yatırımın rakamsal olarak ifade vedilmesi ve ödeme planı için alternetifçözümlern üretilmesi.',
    },
    {
        icon: 'kanban',
        title: 'PROJELENDİRME',
        desc: 'Belirlenen makina parkının mevcut binadan prosese uygun olarak yerleşim planının oluşturulması veya yeniden yapılandırılması.',
    },
    {
        icon: 'bar-chart-steps',
        title: 'PLANLAMA',
        desc: 'Hedeflenen zamanda üretime geçilmesi için koşulların tesbit edilerek siparişlerin düzenlenmesi ve teyit edilmesi.',
    },
    {
        icon: 'truck',
        title: 'SEVKİYAT',
        desc: 'Malın üretim aşamasının kontrölü ile zamanlama konusundaki problemlerin giderilerek sevkiyat ve gümrüklemede yaşanacak gecikmelerin bertaraf edilmesi.',
    },
    {
        icon: 'sliders',
        title: 'TESİSAT YAPILANDIRMA',
        desc: 'Projelendirme aşamasından sonra makina parkının montaj aşamasına kadar geçen zamanda, çizilen orıjeye göre gerekli tesisatın hazır hale getirilmesi.',
    },
    {
        icon: 'gear',
        title: 'MONTAJ VE İŞLETMEYE ALMA',
        desc: 'Makinaların, konusunda uzman teknikekip ile projeye uygun ve üstün kaliteli ekipmanlarla montajı, mühendisler tarafından yapılacak kontrol sonrası işletmeye alınması.',
    },
    {
        icon: 'gear-wide',
        title: 'YEDEK PARÇA HİZMETLERİ',
        desc: 'Tüm gıda ve sanayi makinalarına Lazer Kesim Makinaları, CNC tezgahları, Enjeksiyon Makinaları, Üniversal Torna Makinaları, Üniversal Freze, Kalıpçı Freze Tezgahları, Dik Planya Tezgahları, Eksantrik Pres, Hidrolik Pres, Stunlu Matkap Tezgahı, Plazma, Abkant Pres, Giyotin Makas, Silindir Tezgahlarındanoluşan makina paktında Tasarım Mühendisleri ile yedek parça üretimi yapmaktadır.',
    },
    {
        icon: 'clock',
        title: 'PERİYODİK BAKIM VE SERVİS HİZMETLERİ',
        desc: 'Makina parkının işler vaziyette teslimini mütakip, periyodik zamanlarda genel kontrol ve bakımlarının Mühendisler ve teknisyenler tarafından yapılması. Grekli durumlarda işletmenin çağrısı ile sürekli servis ve yedek parça desteği sağlamaktadır. 7/24 servis ağı ile tüm tesislere anında ulaşım sağlanması gıda sektöründe gıda kodeksine güvenlik zincirinin halkası olmayı başarmış bir servis ağı mevcuttur.',
    },
];

const products = [
    {
        name:'Tüy Seperatörü',
        img: 'assets/img/products/tuy-seperatoru/index.JPG',
        category: 'Makine',
        detail: {
            imgs: [
                'assets/img/products/tuy-seperatoru/HPIM5024.JPG',
                'assets/img/products/tuy-seperatoru/HPIM5026.JPG',
                'assets/img/products/tuy-seperatoru/HPIM5027.JPG',
                'assets/img/products/tuy-seperatoru/HPIM5028.JPG',
            ],
            title: 'Tüy ayırma işlemleri',
            desc:'Tüy ayrıulırken sdjkfjdskfffds',
        },
        category_id: 1
    },
    {
        name:'Haşlama',
        img: 'assets/img/products/haslama/index.JPG',
        category: 'Makine',
        detail: {
            imgs: [
                'assets/img/products/haslama/HPIM4252.JPG',
                'assets/img/products/haslama/HPIM4256.JPG',
                'assets/img/products/haslama/HPIM4257.JPG'
            ],
            title: 'Haşlama Prosesi',
            desc: 'Haşlama proseslerimzide fdsfkdsjfndsjkfnndsfds',
        },
        category_id: 1
    },
    {
        name:'Haşlama',
        img: 'assets/img/products/haslama/index.JPG',
        category: 'Makine',
        detail: {
            imgs: [
                'assets/img/products/haslama/HPIM4252.JPG',
                'assets/img/products/haslama/HPIM4256.JPG',
                'assets/img/products/haslama/HPIM4257.JPG'
            ],
            title: 'Haşlama Prosesi',
            desc: 'Haşlama proseslerimzide fdsfkdsjfndsjkfnndsfds',
        },
        category_id: 1
    },
    {
        name:'Haşlama',
        img: 'assets/img/products/haslama/index.JPG',
        category: 'Makine',
        detail: {
            imgs: [
                'assets/img/products/haslama/HPIM4252.JPG',
                'assets/img/products/haslama/HPIM4256.JPG',
                'assets/img/products/haslama/HPIM4257.JPG'
            ],
            title: 'Haşlama Prosesi',
            desc: 'Haşlama proseslerimzide fdsfkdsjfndsjkfnndsfds',
        },
        category_id: 1
    },
    {
        name:'Haşlama',
        img: 'assets/img/products/haslama/index.JPG',
        category: 'Makine',
        detail: {
            imgs: [
                'assets/img/products/haslama/HPIM4252.JPG',
                'assets/img/products/haslama/HPIM4256.JPG',
                'assets/img/products/haslama/HPIM4257.JPG'
            ],
            title: 'Haşlama Prosesi',
            desc: 'Haşlama proseslerimzide fdsfkdsjfndsjkfnndsfds',
        },
        category_id: 1
    },
];

products.forEach((element,i) => {
   element.id = i + 1; 
});

let heros = [{ 
    bg:`hero-bg-`,
    title: `Maker Makina`,
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci officiis quasi expedita fuga pariatur repudiandae minima voluptates saepe, maxime distinctio doloribus neque quia asperiores deserunt, in perferendis et dicta magni.`
}];
heros.pop();
for (let i = 1; i < 6; i++) {
    heros.push({ 
        bg:`hero-bg-${i}.JPG`,
        title: `Maker Makina ${i}`,
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci officiis quasi expedita fuga pariatur repudiandae minima voluptates saepe, maxime distinctio doloribus neque quia asperiores deserunt, in perferendis et dicta magni. ${i}`
    });
}

export {
    products,
    services,
    heros,
};
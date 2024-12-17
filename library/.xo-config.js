module.exports = {
  "extends": ["eslint-config-xo-react", "xo-typescript/react"], // React ve TypeScript için özel xo kurallarını genişletir.
    "space": 2, // Girinti için boşluk sayısı (bu durumda 2).
    "semicolon": false, // Noktalı virgül kullanımını zorunlu kılmaz (JavaScript'te isteğe bağlı).
    "envs": ["react-native"],  // Kodun çalıştırılacağı ortamları belirtir (react-native).
    "plugins": ["react", "react-native"], // React ve React Hooks için ESLint eklentilerini ekler.
    "ignores": ["build/**", "node_modules/**", "**/__tests__/**", "**/*.test.js", "**/*.spec.js"], //belirli dosya veya dizinleri yoksaymak için ignores anahtarını kullanabilirsiniz.
    "prettier": true, //.prettierrc.js dosyasındaki Prettier ayarlarınızı xo konfigürasyonuna entegre etmek istiyorsanız, xo'nun prettier seçeneğini kullanabilirsiniz
    "extensions": ["js", "jsx","ts", "tsx"], // extensions anahtarı, xo'nun denetleyeceği dosya uzantılarını belirtmek için kullanılır. Örneğin, hem .js hem de .jsx uzantılı dosyaları denetlemek için
    "rules": {
      "eqeqeq": ["error", "always"], // '===' kullanımını zorunlu kılar.
      "no-console": "warn", // Konsol ifadeleri için uyarı verir, hata vermez.
      "no-unused-vars": ["error", { "args": "none" }], // Kullanılmayan değişkenler için hata verir.
      "react/react-in-jsx-scope": "off", // JSX içinde 'React' ifadesinin zorunlu olmasını kaldırır (React 17 ve sonrası için).
      "react/prop-types": "off", // PropTypes kullanımını zorunlu kılmaz (TypeScript ile birlikte kullanıldığında yararlı).
      "react/jsx-first-prop-new-line": [1, "multiline"], // Çok satırlı JSX elemanlarında ilk özelliğin yeni satırda olmasını ister.
      "react/jsx-max-props-per-line": [1, {"maximum": 1, "when": "multiline"}], // Çok satırlı JSX elemanlarında her satırda en fazla bir özellik olmasını ister.
      "react-hooks/rules-of-hooks": "error", // React Hooks kurallarına uymayı zorunlu kılar.
      "react-hooks/exhaustive-deps": "warn", // Effect hook'ları için bağımlılık listesi uyarıları verir.
      "camelcase": ["error", {"properties": "never"}], // Değişken adlarında camelCase kullanımını zorunlu kılar.
      "indent": ["error", 2, { //Bu kural, kodunuzdaki girintiyi kontrol eder."error", 2 ifadesi, yanlış girinti olduğunda bir hata verilmesini ve standart girintinin 2 boşluk olmasını belirtir.
      "SwitchCase": 1, //SwitchCase: 1 ifadesi, switch case'lerinin 1 seviye girintili olmasını gerektirir.
      "VariableDeclarator": 1, //VariableDeclarator: 1 değişken tanımlayıcılarının 1 seviye girintili olmasını gerektirir.
      "outerIIFEBody": 1,  // outerIIFEBody: 1, hemen çağrılan fonksiyon ifadelerinin (IIFE) dış gövdesinin 1 seviye girintili olmasını gerektirir.
      "MemberExpression": 1, //MemberExpression: 1, üye ifadelerinin (örn. obj.property) 1 seviye girintili olmasını gerektirir.
      "FunctionDeclaration": {"parameters": "first"}, //FunctionDeclaration ve FunctionExpression içinde parameters: "first", fonksiyon parametrelerinin ilk parametre ile aynı satırda başlamasını gerektirir.
      "FunctionExpression": {"parameters": "first"},
      "CallExpression": {"arguments": "first"}, //CallExpression: { arguments: "first" }, fonksiyon çağrılarının argümanlarının ilk argüman ile aynı satırda başlamasını gerektirir.
      "ArrayExpression": "first", //ArrayExpression: "first" ve ObjectExpression: "first", diziler ve nesneler içindeki öğelerin ilk öğe ile aynı satırda başlamasını gerektirir.
      "ObjectExpression": "first",
      "ImportDeclaration": "first", //ImportDeclaration: "first", import ifadelerindeki öğelerin ilk öğe ile aynı satırda başlamasını gerektirir.
      "flatTernaryExpressions": false, //flatTernaryExpressions: false, üçlü operatörlerin düz bir şekilde yazılmasına izin vermez.
      "ignoreComments": false
    }],
      "linebreak-style": ["error", "unix"], //Bu kural, satır sonlarının Unix stilinde (\n) olmasını gerektirir.
      "quotes": ["error", "single", { "allowTemplateLiterals": true }], //Bu kural, tek tırnak (') kullanımını zorunlu kılar. allowTemplateLiterals: true ifadesi, şablon literal kullanımına izin verir.
      "no-trailing-spaces": "error", //Satır sonlarında boşluk bırakılmamasını gerektirir.
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }], //Ardışık boş satırların sayısını sınırlar. max: 1, maksimum 1 boş satıra izin verir. maxEOF: 0, dosya sonunda boş satır bırakılmamasını gerektirir.
      "prefer-const": ["error", { //Değişkenlerin mümkün olduğunda const ile tanımlanmasını tercih eder. destructuring: "any", destructuring yapısında en az bir özelliğin yeniden atanmadığı sürece const kullanılmasını gerektirir. ignoreReadBeforeAssign: false, tanımlama öncesinde okuma yapılmamasını gerektirir.
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
      "object-curly-spacing": ["error", "always"] //"object-curly-spacing" Nesne parantezleri arasında her zaman boşluk olmasını gerektirir ({ key: 'value' } gibi).
  },
  "overrides": [ // "files": ["*.ts", "*.tsx"]: Bu ifade, bu override bölümünün sadece .ts ve .tsx uzantılı dosyalar için geçerli olduğunu belirtir. Yani, burada tanımlanan kurallar yalnızca bu tür dosyalara uygulanır.Kullanılmayan bir değişken bulunduğunda, linter bir hata (error) verir. Bu, kodun temiz ve anlaşılır olmasını sağlamak için önemlidir.
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }]
      }
    }
  ]
}

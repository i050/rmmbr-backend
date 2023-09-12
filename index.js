const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

let memoryWall = [
  {
    id: "1",
    title: "בית חולים שערי-צדק",
    about: `
    על פי נתונים רשמיים לשנת 2018, במרכז הרפואי שערי צדק 1,020 רופאים
    וכ-1,750 אחיות, במחלקות בית החולים כ-1,000 מיטות. מספר המתקבלים לאשפוז
    עמד על כ-92,300 לשנה ומספר ימי האשפוז - 390,000. כמו כן נולדו בבית
    החולים מעל 22,000 תינוקות ובוצעו בו מעל 35,000 ניתוחים. בחדר המיון
    (מחלקה לרפואה דחופה) טופלו כ-160,200 מקרים וכ-707,000 מטופלים טופלו
    במסגרת מרפאות החוץ[12]. המרכז הרפואי שערי צדק הוא בית חולים אוניברסיטאי
    הקשור לפקולטה לרפואה של האוניברסיטה העברית בירושלים, והפקולטה למדעי
    הבריאות של אוניברסיטת בן-גוריון בנגב.`,
    ratingTypes: {
      firstPlace: { title: "תורמי זהב", minAmount: 500000 },
      secondPlace: { title: "תורמי כסף", minAmount: 100000 },
      thirdPlace: { title: "תורמי נחושת", minAmount: 100 },
    },

    deceasedsInfo: [
      {
        id: 1,
        name: "yosef hayim",
        donationAmount: 600000,
        imgPath: "src/assets/images/donorsImages/yosef-hayim.jpg",
      },
      {
        id: 2,
        name: "matilda katz",
        donationAmount: 150000,
        imgPath: "src/assets/images/donorsImages/matilda.jpg",
      },
      {
        id: 3,
        name: "yitzhak shinfeld",
        donationAmount: 700000,
        imgPath: "https://picsum.photos/202",
      },
      {
        id: 4,
        name: "moshe berger",
        donationAmount: 550000,
        imgPath: "https://picsum.photos/203",
      },
      {
        id: 5,
        name: "shlomo yosef",
        donationAmount: 200000,
        imgPath: "https://picsum.photos/193",
      },
      {
        id: 6,
        name: "dovid",
        donationAmount: 70000,
        imgPath: "https://picsum.photos/199",
      },
      {
        id: 7,
        name: "hayim",
        donationAmount: 900000,
        imgPath: "https://picsum.photos/198",
      },
      {
        id: 8,
        name: "yonatan",
        donationAmount: 300000,
        imgPath: "https://picsum.photos/197",
      },
      {
        id: 9,
        name: "yosef",
        donationAmount: 250000,
        imgPath: "https://picsum.photos/195",
      },
      {
        id: 10,
        name: "shimer",
        donationAmount: 800000,
        imgPath: "https://picsum.photos/193",
      },
    ],
    highlightsNews: [
      {
        id: "1",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "2",
        img: "https://picsum.photos/198",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        date: "2022-03-03",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "3",
        img: "https://picsum.photos/190",
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "4",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "5",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "6",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "7",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "8",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
      {
        id: "9",
        img: null,
        date: "2022-03-03",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.",
        title: "נפתח אגף יולדות שברנו שיא עם לידת 380 תינוקות ביום",
      },
    ],
    sliderUpdates: [
      {
        id: "1",
        imagePath:
          "https://www.kolhair.co.il/wp-content/uploads/2021/10/5801dbefff88f7e75d983b031a6305ae-e1649575678587.jpg.webp",
        text: "בית חולים שערי צדק",
      },
      {
        id: "2",
        imagePath:
          "https://jerusalem.mynet.co.il/picserver/mynet/wcm_upload/wcm_mynet_pic/crop_images/2020/02/16/446557/511005_0_0_1059_603_large.jpg",
        text: "צפוף בבית החולים נכון לעכשיו תפוסה מלאה",
      },
      {
        id: "3",
        imagePath:
          "https://www.roarchitects.net/f-users/user_100587/website_100569/images/thumbs/W_960_dscf0072.JPG",
        text: "קבלה חדשה במחלקת אף-אוזן-גרון",
      },
      {
        id: "4",
        imagePath:
          "https://pic1.calcalist.co.il/PicServer3/2020/10/21/1029474/1-l.jpg",
        text: "זוכי פרס רופאי השנה של בית החולים",
      },
      {
        id: "5",
        imagePath:
          "https://maternity.baby-land.co.il/wp-content/uploads/2017/05/miun-2-new.jpg",
        text: "המיטות החדשות",
      },
      {
        id: "6",
        imagePath:
          "https://www.szmc.org.il/UploadedImages//06_2016/ShaareZedek_1.jpg",
        text: "בית החולים שערי צדק הישן",
      },
    ],
  },
  {
    id: "2",
    title: "מלחמת יום כיפור",
    about: `
     ילן במלחמת יום הכיפורים פרצה ביום הכיפורים ה'תשל"ד, 6 באוקטובר 1973,
      בהתקפת קואליציה של צבאות מדינות ערביות נגד ישראל, בהובלתן של סוריה ומצרים, שנתמכו על ידי חילות משלוח מארצות ערב,
       בעיקר מעיראק ומירדן. חילופי אש נמשכו עד 26 באוקטובר.
       במלחמה ספג צה"ל אבדות גדולות יותר מ2000 חיילים נהרגו במלחמה. יהי זכרם ברוך.`,
    ratingTypes: {
      firstPlace: { title: "קיר זהב", minAmount: 500000 },
      secondPlace: { title: "קיר כסף", minAmount: 100000 },
      thirdPlace: { title: "קיר נחושת", minAmount: 100 },
    },

    deceasedsInfo: [
      {
        id: 1,
        name: "yosef hayim",
        donationAmount: 600000,
        imgPath: "src/assets/images/donorsImages/yosef-hayim.jpg",
      },
      {
        id: 2,
        name: "matilda katz",
        donationAmount: 150000,
        imgPath: "src/assets/images/donorsImages/matilda.jpg",
      },
      {
        id: 3,
        name: "yitzhak",
        donationAmount: 700000,
        imgPath: "https://picsum.photos/202",
      },
      {
        id: 4,
        name: "moshe",
        donationAmount: 50000,
        imgPath: "https://picsum.photos/203",
      },
      {
        id: 5,
        name: "shlomo",
        donationAmount: 200000,
        imgPath: "https://picsum.photos/193",
      },
      {
        id: 6,
        name: "dovid",
        donationAmount: 70000,
        imgPath: "https://picsum.photos/199",
      },
      {
        id: 7,
        name: "hayim",
        donationAmount: 900000,
        imgPath: "https://picsum.photos/198",
      },
      {
        id: 8,
        name: "yonatan",
        donationAmount: 300000,
        imgPath: "https://picsum.photos/197",
      },
      {
        id: 9,
        name: "yosef",
        donationAmount: 250000,
        imgPath: "https://picsum.photos/195",
      },
      {
        id: 10,
        name: "shimer",
        donationAmount: 800000,
        imgPath: "https://picsum.photos/193",
      },
    ],
    highlightsNews: [
      {
        id: "1",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "2",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "3",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "4",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "5",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "6",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "7",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "8",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
      {
        id: "9",
        img: `https://galperel.files.wordpress.com/2021/10/d7a2d795d7aad7a7-d7a9d79c-d7a2d795d7aad7a7-d7a9d79c-d79ed795d7a8d79bd791d795d7aa-d794d79ed79cd797d79ed794-d791d7a2d799d793d79f-d794d79cd797d799d79ed794-d791d7a7d7a8d791-d794d790d7a0d7a9d-21.jpg`,
        date: "2022-03-03",
        text: `"אני לא מגדיר את עצמי הלום קרב, אבל אני חושב שכל יום המלחמה באה לביקור", כך מתאר יעקב חורין, שהיה באוקטובר 1973 קצין מילואים צעיר בשריון, את הסיבה שבחר אחרי כמעט יובל שנים, לחטט בפצעים של מה שלא הצליח לשכוח. מעבר להיותה הטראומה הקולקטיבית הגדולה ביותר בתולדות מדינת ישראל, מלחמת יום הכיפורים היא גם אירוע ששינה את חייהם האישיים של עשרות אלפי הלוחמים שלקחו בה חלק. תוך כדי שבנו את חייהם הבוגרים, רבים מהם בחרו להדחיק את הזיכרונות ממה שעברו באותם 19 ימי לחימה ונמנעו מלדבר על כך במשך 48 שנים – על אף שהמשקעים נותרו בנפשם.
                רק היום, כשהם כבר חובקים נכדים, הם מעזים לספר על אותה התקופה, שבה חוו בגוף ראשון את מוראות המלחמה, איבדו את חבריהם לנשק, נחשפו לזוועות שדה הקרב והרגישו שהם נושאים על כתפיהם הצרות את האחריות להישרדותה של מדינת היהודים. בעוד שהארכיונים עמוסים בחומרים שתיעדו את זיכרונותיהם של מנהיגי המדינה באותו הזמן, הקצינים הבכירים וגיבורי המלחמה המעוטרים – חוויותיהם של רבים מהלוחמים הפשוטים מתחילות רק עכשיו לצאת לאור והצלקות שהסתירו נחשפות.`,
        title:
          '"אחרי הקרב שכבתי יומיים באפסנאות בלי לאכול ולשתות": לוחמי יום כיפור חושפים את מה שהם סוחבים איתם 48 שנה"',
      },
    ],
    sliderUpdates: [
      {
        id: "1",
        imagePath: "https://remember.bio/wp-content/uploads/2023/07/th.jpeg",
        text: "מלחמת יום כיפור",
      },
      {
        id: "2",
        imagePath:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/IDF_Chief_of_Staff_in_consultation_with_the_Northern_Command%2C_1973_%282936133-46%29.webp/1280px-IDF_Chief_of_Staff_in_consultation_with_the_Northern_Command%2C_1973_%282936133-46%29.webp.png",
        text: 'הרמטכ"ל דוד אלעזר בהתייעצות בפיקוד הצפון',
      },
      {
        id: "3",
        imagePath:
          "https://www.israelhayom.co.il/wp-content/uploads/2022/04/15/15386437335997_b-960x640.jpg",
        text: "חיילינו יוצאים לקרב",
      },
      {
        id: "4",
        imagePath: "https://www.slides.co.il/media/images/1234855050.jpg",
        text: "אריק שרון ומשה דיין בחזית המלחמה",
      },
      {
        id: "5",
        imagePath:
          "https://yadlashiryon.com/wp-content/uploads/2019/01/20052014-1.jpg",
        text: "קרב חטיבת הטנקים 14 בחווה הסינית",
      },
      {
        id: "6",
        imagePath: "https://img.mako.co.il/2020/12/31/45678_autoOrient_i.jpg",
        text: "מוצב החרמון",
      },
    ],
  },
];

let users = [
  {
    id: "1",
    name: "elad",
    password: "1234",
    email: "eladcohen1978@gmail.com",
    permissions: { memoryWalls: [], meoryPages: [] },
    role: "admin",
  },
  {
    id: "2",
    name: "isaac",
    password: "1234",
    email: "a0504104451@gmail.com",
    permissions: { memoryWalls: ["1"], meoryPages: [] },
    role: "partialAccess",
  },
  {
    id: "3",
    name: "yuval",
    password: "1234",
    email: "a0504114914@gmail.com",
    permissions: { memoryWalls: [], meoryPages: [] },
    role: "user",
  },
  {
    id: "4",
    name: "matan",
    password: "1234",
    email: "ishe0508201818@gmail.com",
    permissions: { memoryWalls: ["2"], meoryPages: [] },
    role: "partialAccess",
  },
  {
    id: "5",
    name: "yael",
    password: "1234",
    email: "1234@gmail.com",
    permissions: { memoryWalls: [], meoryPages: [] },
    role: "admin",
  },
  {
    id: "6",
    name: "dvora",
    password: "1234",
    email: "5678@gmail.com",
    permissions: { memoryWalls: [], meoryPages: [] },
    role: "user",
  },
];
//get memoryWall
app.get("/api/memoryWall", (req, res) => {
  res.json(memoryWall);
});

//get memoryWll by id
app.get("/api/memoryWall/:id", (req, res) => {
  const memoryWall = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWall);
});

//post memoryWall
app.post("/api/memoryWall", (req, res) => {
  memoryWall.push(req.body);
  res.json(memoryWall);
});

// get users
app.get("/api/users", (req, res) => {
  res.json(users);
});

//get highlightsNews
app.get("/api/getMemoryWallById/:id/highlightsNews", (req, res) => {
  const memoryWall = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWall.highlightsNews);
});

//post highlightsNews
app.post("/api/getMemoryWallById/:id/highlightsNews", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  const newHighlight= req.body;
  memoryWallData.highlightsNews.push(newHighlight);
  res.json(memoryWallData.highlightsNews);
});



//get deceasedsInfo
app.get("/api/getMemoryWallById/:id/deceasedsInfo", (req, res) => {
  const memoryWall = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWall.deceasedsInfo);
});

//get sliderUpdates
app.get("/api/getMemoryWallById/:id/sliderUpdates", (req, res) => {
  const memoryWall = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWall.sliderUpdates);
});



//get user by id
app.get("/api/users/:id", (req, res) => {
  const oneUser = users.find((u) => u.id === req.params.id);
  res.json(oneUser);
});

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

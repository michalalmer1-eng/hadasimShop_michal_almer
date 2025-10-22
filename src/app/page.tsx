import Card from "@/app/components/Card/card";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        padding: "24px",
      }}
    >
      {/* רשת הכרטיסים */}
      <section
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
        }}
      >
        {/* ישראל */}
        <Card image="/images/1.jpg"  title="דירה במרכז תל אביב"     description="לופט מהמם עם נוף לים"                     price={550} />
        <Card image="/images/2.jpg"  title="צימר בגליל"              description="שקט, טבע ונוף עוצר נשימה"                 price={420} />
        <Card image="/images/3.jpg"  title="וילה יוקרתית בירושלים"   description="בריכה פרטית, ג’קוזי ונוף להרים"           price={950} />
        <Card image="/images/4.jpg"  title="סטודיו מודרני בחיפה"     description="נוף לעיר ולים, קרוב למרכז הכרמל"           price={480} />
        <Card image="/images/5.jpg"  title="דירת גן בנתניה"          description="מיקום מעולה ליד הים, חצר פרטית"            price={620} />
        <Card image="/images/6.jpg"  title="קוטג' משפחתי בבאר שבע"   description="מרווח, נעים, כולל חניה פרטית"              price={390} />
        <Card image="/images/7.jpg"  title="צימר רומנטי בראש פינה"   description="אווירה מושלמת לזוגות, עם ג’קוזי"            price={530} />
        <Card image="/images/8.jpg"  title="לופט מעוצב בהרצליה"      description="עיצוב יוקרתי, בריכה על הגג"                 price={850} />
        <Card image="/images/9.jpg"  title="דירת נופש באילת"         description="בריכה, נוף לים, 5 דקות מהטיילת"            price={720} />
        <Card image="/images/10.jpg" title="צימר מפנק ברמת הגולן"    description="שקט, טבע ונוף הררי מרהיב"                   price={610} />

        {/* חו״ל */}
        <Card image="/images/11.jpg" title="דירת יוקרה בפריז"        description="נוף למגדל אייפל, עיצוב צרפתי קלאסי"        price={990} />
        <Card image="/images/12.jpg" title="דירה בלונדון"            description="לופט מודרני בלב העיר, ליד הביג בן"          price={870} />
        <Card image="/images/13.jpg" title="בית נופש ברומא"          description="אבן איטלקית עתיקה, סמוך לקולוסיאום"         price={650} />
        <Card image="/images/14.jpeg" title="וילה מפוארת בתאילנד"     description="בריכה פרטית, נוף לים טרופי"                 price={720} />
        <Card image="/images/15.jpeg" title="בונגלו בקוסמוי"          description="צופה על חוף לבן, בין עצי קוקוס"              price={560} />
        <Card image="/images/16.jpeg" title="פנטהאוז בניו יורק"       description="נוף לעיר שלא ישנה, עיצוב אלגנטי"            price={1200} />
        <Card image="/images/17.jpeg" title="בית חוף במלדיביים"       description="מים צלולים, חוויה מושלמת לזוגות"             price={1350} />
        <Card image="/images/18.jpeg" title="צימר בשווייץ"            description="בקתת עץ באלפים, נוף מושלג מהמם"              price={880} />
        <Card image="/images/19.jpeg" title="דירה באמסטרדם"           description="מעל התעלות, עיצוב סקנדינבי חמים"             price={670} />
        <Card image="/images/20.jpeg" title="סוויטה בטוקיו"           description="מודרניות יפנית עם נוף עירוני מדהים"          price={940} />
      </section>
    </main>
  );
}

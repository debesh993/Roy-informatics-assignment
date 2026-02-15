import { createContext, useContext } from "react";

// ================= IMPORT ALL IMAGES HERE =================

// Dhuti
import dhoti1 from "../../assets/product_image/20220702061015_dhoti-1.jpg";
import dhoti2 from "../../assets/product_image/20220702062658_dhoti-3.jpg";
import dhoti3 from "../../assets/product_image/20220702062837_dhoti-2.jpg";
import dhoti4 from "../../assets/product_image/20220702064238_dhoti-7.jpg";
import dhoti5 from "../../assets/product_image/20220702064410_dhoti-11.jpg";
import dhoti6 from "../../assets/product_image/20220702064750_dhoti-9.jpg";
import dhoti7 from "../../assets/product_image/20220702070417_dhoti-6.jpg";

import dhoti8 from "../../assets/product_image/202211021224095575.jpg";
import dhoti9 from "../../assets/product_image/202211021244406036.jpg";
import dhoti10 from "../../assets/product_image/202211021245237245.jpg";
import dhoti11 from "../../assets/product_image/202211021250536766.jpg";
import dhoti12 from "../../assets/product_image/202211021252506577.jpg";

// Kurta
import kurta13 from "../../assets/Kurta/20220701053530_kurta-18.jpg";
import kurta14 from "../../assets/Kurta/20220701053816_kurta-14.jpg";
import kurta15 from "../../assets/Kurta/20220701054250_kurta-17.jpg";
import kurta16 from "../../assets/Kurta/20220702011854_kurta-24.jpg";
import kurta17 from "../../assets/Kurta/20220702044927_kurta-32.jpg";
import kurta18 from "../../assets/Kurta/20220702045211_kurta-30.jpg";
import kurta19 from "../../assets/Kurta/20220702053235_kurta-35.jpg";
import kurta20 from "../../assets/Kurta/20220702053826_kurta-32.jpg";
import kurta21 from "../../assets/Kurta/20220706045906_kurta-36.jpg";
import kurta22 from "../../assets/Kurta/202306051132553918.jpg";
import kurta23 from "../../assets/Kurta/202306051135005290.jpg";
import kurta24 from "../../assets/Kurta/202306051144118013.jpg";
import kurta25 from "../../assets/Kurta/202306051150403933.jpg";
import kurta26 from "../../assets/Kurta/202306051152263332.jpg";
import kurta27 from "../../assets/Kurta/202306091151199973.jpg";
import kurta28 from "../../assets/Kurta/202307230156514551.jpg";
import kurta29 from "../../assets/Kurta/202307241152013326.jpg";
import kurta30 from "../../assets/Kurta/202307260712215804.jpg";
import kurta31 from "../../assets/Kurta/202307261230253222.jpg";
import kurta32 from "../../assets/Kurta/202307290435109913.jpg";
import kurta33 from "../../assets/Kurta/202309051255307938.jpg";
import kurta34 from "../../assets/Kurta/202309171121226887.jpg";
import kurta35 from "../../assets/Kurta/202309171127055224.jpg";
import kurta36 from "../../assets/Kurta/202309171129546977.jpg";
import kurta37 from "../../assets/Kurta/202506220416139643.JPG";
import kurta38 from "../../assets/Kurta/202506220422441284.JPG";
import kurta39 from "../../assets/Kurta/202506220431392012.jpeg";
import kurta40 from "../../assets/Kurta/202508040534355330.jpg";
import kurta41 from "../../assets/Kurta/202508230113381442.jpg";
import kurta42 from "../../assets/Kurta/202508230124357085.jpg";
import kurta43 from "../../assets/Kurta/202508230145292557.jpg";
import kurta44 from "../../assets/Kurta/202508230156287145.jpg";
import kurta45 from "../../assets/Kurta/202508230229268387.jpg";
import kurta46 from "../../assets/Kurta/202508230243377999.jpg";
import kurta47 from "../../assets/Kurta/202508230548082096.jpg";
import kurta48 from "../../assets/Kurta/202508230604462492.jpg";
import kurta49 from "../../assets/Kurta/202508231217258307.jpg";
import kurta50 from "../../assets/Kurta/202508231234078392.jpg";
// sherwani
import sherwani51 from "../../assets/sherwani/20220731120943_sherwani4.jpg";
import sherwani52 from "../../assets/sherwani/20220624121138_ANKL1.jpg";
import sherwani53 from "../../assets/sherwani/20220624122113_ANKL29copy.jpg";
import sherwani54 from "../../assets/sherwani/20220624125026_ANKL10copy.jpg";

//saree
import saree55 from "../../assets/saree/20220701012756_saree3jpg.jpg";
import saree56 from "../../assets/saree/20220701013816_saree6jpg.jpg";
import saree57 from "../../assets/saree/20220701020522_saree14jpg.jpg";
import saree58 from "../../assets/saree/20220701022049_saree15jpg.jpg";
import saree59 from "../../assets/saree/20220701023034_saree21jpg.jpg";
import saree60 from "../../assets/saree/20220701023309_saree10jpg.jpg";
import saree61 from "../../assets/saree/20220701023743_saree18jpg.jpg";
import saree62 from "../../assets/saree/20220701051958_saree24jpg.jpg";
import saree63 from "../../assets/saree/20220701052303_saree27jpg.jpg";
import saree64 from "../../assets/saree/20220706014527_saree31jpg.jpg";
import saree65 from "../../assets/saree/20220706044549_saree36jpg.jpg";
import saree66 from "../../assets/saree/20220818035210_saree3.jpg";
import saree67 from "../../assets/saree/20220818035454_saree4.jpg";
import saree68 from "../../assets/saree/20220818041530_saree12.jpg";
import saree69 from "../../assets/saree/202306051129434109.jpg";
import saree70 from "../../assets/saree/202306130105335640.jpg";
import saree71 from "../../assets/saree/202308130437293854.jpg";
import saree72 from "../../assets/saree/202308130459048337.jpg";
import saree73 from "../../assets/saree/202311090106477401.jpg";
import saree74 from "../../assets/saree/202311090109382550.jpg";
import saree75 from "../../assets/saree/202311251200591987.jpg";
import saree76 from "../../assets/saree/202311251203451414.jpg";
import saree77 from "../../assets/saree/202312170457325055.jpg";
import saree78 from "../../assets/saree/202403120455114412.jpg";
import saree79 from "../../assets/saree/202403120500304485.jpg";
import saree80 from "../../assets/saree/202403120504123278.jpg";
import saree81 from "../../assets/saree/202407141226471461.jpg";
import saree82 from "../../assets/saree/202407141236028847.jpg";
import saree83 from "../../assets/saree/202407141238382093.jpg";
import saree84 from "../../assets/saree/202407141240114792.jpg";
import saree85 from "../../assets/saree/202407141248594678.jpg";
import saree86 from "../../assets/saree/202506220255332390.jpg";
import saree87 from "../../assets/saree/202506220338296992.jpg";
import saree88 from "../../assets/saree/202506220513439984.jpg";
import saree89 from "../../assets/saree/202506220519491869.jpg";
import saree90 from "../../assets/saree/202506220555468068.JPG";
import saree91 from "../../assets/saree/202508030611393778.jpg";
import saree92 from "../../assets/saree/202508040517132154.jpg";
//lahenga
import lehenga93 from "../../assets/lahenga/20220624120632_ANKL6copy.jpg";
import lehenga94 from "../../assets/lahenga/20220624124546_ANKL24copy.jpg";
import lehenga95 from "../../assets/lahenga/20220624125436_ANKL12copy.jpg";
import lehenga96 from "../../assets/lahenga/20220731115839_lehenga2.jpg";
//blouse
import blouse97 from "../../assets/blouse/202305250647343951.jpeg";
import blouse98 from "../../assets/blouse/202305250654096693.jpeg";
import blouse99 from "../../assets/blouse/202305250700075418.jpeg";
import blouse100 from "../../assets/blouse/202305260105525069.jpg";
import blouse101 from "../../assets/blouse/202305260120235286.jpg";
import blouse102 from "../../assets/blouse/202305260125406288.jpg";
import blouse103 from "../../assets/blouse/202305260132324969.jpg";
import blouse104 from "../../assets/blouse/202305260138004297.jpg";
import blouse105 from "../../assets/blouse/202305260143037187.jpg";
import blouse106 from "../../assets/blouse/202305260152225517.jpg";
import blouse107 from "../../assets/blouse/202305260204349682.jpg";
import blouse108 from "../../assets/blouse/202305260214342916.jpg";
import blouse109 from "../../assets/blouse/202305260309512309.jpg";
import blouse110 from "../../assets/blouse/202305260320182304.jpg";
import blouse111 from "../../assets/blouse/202305260338321672.jpg";
import blouse112 from "../../assets/blouse/202305260352582902.jpg";
import blouse113 from "../../assets/blouse/202305260422111948.jpg";
import blouse114 from "../../assets/blouse/202305261248576843.jpg";
import blouse115 from "../../assets/blouse/202305261258058786.jpg";
import blouse116 from "../../assets/blouse/202306050154468078.jpg";
import blouse117 from "../../assets/blouse/202306160103223279.jpg";
import blouse118 from "../../assets/blouse/202306160105056299.jpg";
import blouse119 from "../../assets/blouse/202306160107057632.jpg";
//punjabi
import punjabi120 from "../../assets/punjabi/20220813013242_kutub1.jpg";
import punjabi121 from "../../assets/punjabi/20220813013801_kutub2.jpg";
import punjabi122 from "../../assets/punjabi/202306051128028803.jpg";
//lahenga and sherwani
import laherwani123 from "../../assets/Lahenga_sherwani/20220624121734_ANKL18copy.jpg";
import laherwani124 from "../../assets/Lahenga_sherwani/20220624124325_ANKL32copy.jpg";
import laherwani125 from "../../assets/Lahenga_sherwani/20220624125839_ANKL17copy.jpg";
import laherwani126 from "../../assets/Lahenga_sherwani/20220731122121_lehenga5.jpg";
//juti
import juti127 from "../../assets/juti/20220713114115_juti1.jpg";
import juti128 from "../../assets/juti/20220728032921_juti5.jpg";
import juti129 from "../../assets/juti/20220728033240_juti11.jpg";
import juti130 from "../../assets/juti/20220728033746_juti8.jpg";
import juti131 from "../../assets/juti/202303040123207628.jpg";
import juti132 from "../../assets/juti/202303040220208058.jpg";
import juti133 from "../../assets/juti/202303040251468481.jpg";
import juti134 from "../../assets/juti/202303040311125578.jpg";
import juti135 from "../../assets/juti/202303040314448832.jpg";
import juti136 from "../../assets/juti/202308150704264821.jpg";
import juti137 from "../../assets/juti/202407090639547348.jpg";
import juti138 from "../../assets/juti/202407090640541938.jpg";
import juti139 from "../../assets/juti/202407090643157007.jpg";

//clintele
import clientevele140 from "../../assets/clientele/202407140523528143.jpg";
import clientevele141 from "../../assets/clientele/202407140526555707.jpg";
import clientevele142 from "../../assets/clientele/202407140538127529.jpg";
import clientevele143 from "../../assets/clientele/202407140539504765.jpg";
import clientevele144 from "../../assets/clientele/202407140541409267.jpg";
import clientevele145 from "../../assets/clientele/202407140543048568.jpg";
import clientevele146 from "../../assets/clientele/202407140547171157.jpg";
import clientevele147 from "../../assets/clientele/202407140550192678.jpeg";
import clientevele148 from "../../assets/clientele/202407140552282691.jpg";
import clientevele149 from "../../assets/clientele/202407140555092761.jpeg";
import clientevele150 from "../../assets/clientele/202407140559259822.jpg";
import clientevele151 from "../../assets/clientele/202407140612565677.jpeg";
import clientevele152 from "../../assets/clientele/202407140618574314.jpg";

// ================= CREATE CONTEXT =================

const ProductContext = createContext();

 const ProductProvider = ({ children }) => {

  const products = [

    // ===== Dhuti Collection =====
    { id: 1, name: "Dhuti Classic", category: "Men's", mrp: "₹3500", salePrice: "₹3300", image: dhoti1, link: "/product_details/1" },
      { id: 2, name: "Dhuti Royal", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti2, link: "/product_details/2" },
      { id: 3, name: "Dhuti Elegance", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti3, link: "/product_details/3" },
      { id: 4, name: "Dhuti Premium", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti4, link: "/product_details/4" },
      { id: 5, name: "Dhuti Comfort", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti5, link: "/product_details/5" },
      { id: 6, name: "Dhuti Deluxe", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti6, link: "/product_details/6" },
      { id: 7, name: "Dhuti Trendy", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti7, link: "/product_details/7" },
      { id: 8, name: "Dhuti Modern", category: "Men's", mrp: "₹3500", salePrice: "₹3300", image: dhoti8, link: "/product_details/8" },
      { id: 9, name: "Dhuti Urban", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti9, link: "/product_details/9" },
      { id: 10, name: "Dhuti Luxe", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti10, link: "/product_details/10"},
      { id: 11, name: "Dhuti Heritage", category: "Men's", mrp: "₹4000", salePrice: "₹3800", image: dhoti11, link: "/product_details/11" },
      { id: 12, name: "Dhuti Supreme", category: "Men's", mrp: "₹6500", salePrice: "₹6400", image: dhoti12, link: "/product_details/12" },
        // ===== Kurta Collection =====
      { id: 13, name: "Kurta Festive", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta13, link: "/product_details/13" },
{ id: 14, name: "Kurta Celebration", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta14, link: "/product_details/14" },
{ id: 15, name: "Kurta Party", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta15, link: "/product_details/15" },
{ id: 16, name: "Kurta Classic Gold", category: "Men's", mrp: "₹24000", salePrice: "₹23000", image: kurta16, link: "/product_details/16" },
{ id: 17, name: "Kurta Royal Blue", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta17, link: "/product_details/17" },
{ id: 18, name: "Kurta Elegant Red", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta18, link: "/product_details/18" },
{ id: 19, name: "Kurta Festive Green", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta19, link: "/product_details/19" },
{ id: 20, name: "Kurta Royal Maroon", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta20, link: "/product_details/20" },
{ id: 21, name: "Kurta Trendy Black", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta21, link: "/product_details/21" },
{ id: 22, name: "Kurta Classic White", category: "Men's", mrp: "₹20000", salePrice: "₹19000", image: kurta22, link: "/product_details/22" },
{ id: 23, name: "Kurta Gold Shine", category: "Men's", mrp: "₹25000", salePrice: "₹24000", image: kurta23, link: "/product_details/23" },
{ id: 24, name: "Kurta Celebration Blue", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta24, link: "/product_details/24" },
{ id: 25, name: "Kurta Party Red", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta25, link: "/product_details/25" },
{ id: 26, name: "Kurta Luxe Gold", category: "Men's", mrp: "₹26000", salePrice: "₹25000", image: kurta26, link: "/product_details/26" },
{ id: 27, name: "Kurta Elegant Beige", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta27, link: "/product_details/27" },
{ id: 28, name: "Kurta Royal Green", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta28, link: "/product_details/28" },
{ id: 29, name: "Kurta Festive Yellow", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta29, link: "/product_details/29" },
{ id: 30, name: "Kurta Trendy Orange", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta30, link: "/product_details/30" },
{ id: 31, name: "Kurta Classic Pink", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta31, link: "/product_details/31" },
{ id: 32, name: "Kurta Royal Purple", category: "Men's", mrp: "₹20000", salePrice: "₹19000", image: kurta32, link: "/product_details/32" },
{ id: 33, name: "Kurta Luxe Orange", category: "Men's", mrp: "₹25000", salePrice: "₹24000", image: kurta33, link: "/product_details/33" },
{ id: 34, name: "Kurta Festive Blue", category: "Men's", mrp: "₹22000", salePrice: "₹21000", image: kurta34, link: "/product_details/34" },
{ id: 35, name: "Kurta Party Green", category: "Men's", mrp: "₹23000", salePrice: "₹22000", image: kurta35, link: "/product_details/35" },
{ id: 36, name: "Kurta Classic Red", category: "Men's", mrp: "₹26000", salePrice: "₹25000", image: kurta36, link: "/product_details/36" },
{ id: 37, name: "Kurta Elegant Black", category: "Men's", mrp: "₹19500", salePrice: "₹18500", image: kurta37, link: "/product_details/37" },
{ id: 38, name: "Kurta Royal White", category: "Men's", mrp: "₹21000", salePrice: "₹20000", image: kurta38, link: "/product_details/38" },
{ id: 39, name: "Kurta Premium Beige", category: "Men's", mrp: "₹21500", salePrice: "₹20500", image: kurta39, link: "/product_details/39" },
{ id: 40, name: "Kurta Royal Navy", category: "Men's", mrp: "₹22500", salePrice: "₹21500", image: kurta40, link: "/product_details/40" },
{ id: 41, name: "Kurta Classic Cream", category: "Men's", mrp: "₹23500", salePrice: "₹22500", image: kurta41, link: "/product_details/41" },
{ id: 42, name: "Kurta Elegant Sky Blue", category: "Men's", mrp: "₹24500", salePrice: "₹23500", image: kurta42, link: "/product_details/42" },
{ id: 43, name: "Kurta Festive Peach", category: "Men's", mrp: "₹25500", salePrice: "₹24500", image: kurta43, link: "/product_details/43" },
{ id: 44, name: "Kurta Luxe Maroon", category: "Men's", mrp: "₹26500", salePrice: "₹25500", image: kurta44, link: "/product_details/44" },
{ id: 45, name: "Kurta Royal Silver", category: "Men's", mrp: "₹27500", salePrice: "₹26500", image: kurta45, link: "/product_details/45" },
{ id: 46, name: "Kurta Classic Brown", category: "Men's", mrp: "₹28500", salePrice: "₹27500", image: kurta46, link: "/product_details/46" },
{ id: 47, name: "Kurta Party Teal", category: "Men's", mrp: "₹29500", salePrice: "₹28500", image: kurta47, link: "/product_details/47" },
{ id: 48, name: "Kurta Trendy Lavender", category: "Men's", mrp: "₹30500", salePrice: "₹29500", image: kurta48, link: "/product_details/48" },
{ id: 49, name: "Kurta Signature Gold", category: "Men's", mrp: "₹31500", salePrice: "₹30500", image: kurta49, link: "/product_details/49" },
{ id: 50, name: "Kurta Heritage Edition", category: "Men's", mrp: "₹32500", salePrice: "₹31500", image: kurta50, link: "/product_details/50" },
        // ===== Sherwani Collection =====
    { id: 51, name: "Sherwani Classic", category: "Men's", mrp: "N/A", salePrice: "₹27000", image: sherwani51, link: "/product_details/51" },
  { id: 52, name: "Sherwani Royal", category: "Men's", mrp: "N/A", salePrice: "₹28000", image: sherwani52, link: "/product_details/52" },
  { id: 53, name: "Sherwani Elegance", category: "Men's", mrp: "N/A", salePrice: "₹29000", image: sherwani53, link: "/product_details/53" },
  { id: 54, name: "Sherwani Premium", category: "Men's", mrp: "N/A", salePrice: "₹30000", image: sherwani54, link: "/product_details/54" },

        //saree
        { id: 55, name: "Elegant Saree 55", category: "Women's", mrp: "N/A", salePrice: "₹2500", image: saree55, link: "/product_details/55" },
{ id: 56, name: "Elegant Saree 56", category: "Women's", mrp: "N/A", salePrice: "₹2600", image: saree56, link: "/product_details/56" },
{ id: 57, name: "Elegant Saree 57", category: "Women's", mrp: "N/A", salePrice: "₹2700", image: saree57, link: "/product_details/57" },
{ id: 58, name: "Elegant Saree 58", category: "Women's", mrp: "N/A", salePrice: "₹2800", image: saree58, link: "/product_details/58" },
{ id: 59, name: "Elegant Saree 59", category: "Women's", mrp: "N/A", salePrice: "₹2900", image: saree59, link: "/product_details/59" },
{ id: 60, name: "Elegant Saree 60", category: "Women's", mrp: "N/A", salePrice: "₹3000", image: saree60, link: "/product_details/60" },
{ id: 61, name: "Elegant Saree 61", category: "Women's", mrp: "N/A", salePrice: "₹3100", image: saree61, link: "/product_details/61" },
{ id: 62, name: "Elegant Saree 62", category: "Women's", mrp: "N/A", salePrice: "₹3200", image: saree62, link: "/product_details/62" },
{ id: 63, name: "Elegant Saree 63", category: "Women's", mrp: "N/A", salePrice: "₹3300", image: saree63, link: "/product_details/63" },
{ id: 64, name: "Elegant Saree 64", category: "Women's", mrp: "N/A", salePrice: "₹3400", image: saree64, link: "/product_details/64" },
{ id: 65, name: "Elegant Saree 65", category: "Women's", mrp: "N/A", salePrice: "₹3500", image: saree65, link: "/product_details/65" },
{ id: 66, name: "Elegant Saree 66", category: "Women's", mrp: "N/A", salePrice: "₹3600", image: saree66, link: "/product_details/66" },
{ id: 67, name: "Elegant Saree 67", category: "Women's", mrp: "N/A", salePrice: "₹3700", image: saree67, link: "/product_details/67" },
{ id: 68, name: "Elegant Saree 68", category: "Women's", mrp: "N/A", salePrice: "₹3800", image: saree68, link: "/product_details/68" },
{ id: 69, name: "Elegant Saree 69", category: "Women's", mrp: "N/A", salePrice: "₹3900", image: saree69, link: "/product_details/69" },
{ id: 70, name: "Elegant Saree 70", category: "Women's", mrp: "N/A", salePrice: "₹4000", image: saree70, link: "/product_details/70" },
{ id: 71, name: "Elegant Saree 71", category: "Women's", mrp: "N/A", salePrice: "₹4100", image: saree71, link: "/product_details/71" },
{ id: 72, name: "Elegant Saree 72", category: "Women's", mrp: "N/A", salePrice: "₹4200", image: saree72, link: "/product_details/72" },
{ id: 73, name: "Elegant Saree 73", category: "Women's", mrp: "N/A", salePrice: "₹4300", image: saree73, link: "/product_details/73" },
{ id: 74, name: "Elegant Saree 74", category: "Women's", mrp: "N/A", salePrice: "₹4400", image: saree74, link: "/product_details/74" },
{ id: 75, name: "Elegant Saree 75", category: "Women's", mrp: "N/A", salePrice: "₹4500", image: saree75, link: "/product_details/75" },
{ id: 76, name: "Elegant Saree 76", category: "Women's", mrp: "N/A", salePrice: "₹4600", image: saree76, link: "/product_details/76" },
{ id: 77, name: "Elegant Saree 77", category: "Women's", mrp: "N/A", salePrice: "₹4700", image: saree77, link: "/product_details/77" },
{ id: 78, name: "Elegant Saree 78", category: "Women's", mrp: "N/A", salePrice: "₹4800", image: saree78, link: "/product_details/78" },
{ id: 79, name: "Elegant Saree 79", category: "Women's", mrp: "N/A", salePrice: "₹4900", image: saree79, link: "/product_details/79" },
{ id: 80, name: "Elegant Saree 80", category: "Women's", mrp: "N/A", salePrice: "₹5000", image: saree80, link: "/product_details/80" },
{ id: 81, name: "Elegant Saree 81", category: "Women's", mrp: "N/A", salePrice: "₹5100", image: saree81, link: "/product_details/81" },
{ id: 82, name: "Elegant Saree 82", category: "Women's", mrp: "N/A", salePrice: "₹5200", image: saree82, link: "/product_details/82" },
{ id: 83, name: "Elegant Saree 83", category: "Women's", mrp: "N/A", salePrice: "₹5300", image: saree83, link: "/product_details/83" },
{ id: 84, name: "Elegant Saree 84", category: "Women's", mrp: "N/A", salePrice: "₹5400", image: saree84, link: "/product_details/84" },
{ id: 85, name: "Elegant Saree 85", category: "Women's", mrp: "N/A", salePrice: "₹5500", image: saree85, link: "/product_details/85" },
{ id: 86, name: "Elegant Saree 86", category: "Women's", mrp: "N/A", salePrice: "₹5600", image: saree86, link: "/product_details/86" },
{ id: 87, name: "Elegant Saree 87", category: "Women's", mrp: "N/A", salePrice: "₹5700", image: saree87, link: "/product_details/87" },
{ id: 88, name: "Elegant Saree 88", category: "Women's", mrp: "N/A", salePrice: "₹5800", image: saree88, link: "/product_details/88" },
{ id: 89, name: "Elegant Saree 89", category: "Women's", mrp: "N/A", salePrice: "₹5900", image: saree89, link: "/product_details/89" },
{ id: 90, name: "Elegant Saree 90", category: "Women's", mrp: "N/A", salePrice: "₹6000", image: saree90, link: "/product_details/90" },
{ id: 91, name: "Elegant Saree 91", category: "Women's", mrp: "N/A", salePrice: "₹6100", image: saree91, link: "/product_details/91" },
{ id: 92, name: "Elegant Saree 92", category: "Women's", mrp: "N/A", salePrice: "₹6200", image: saree92, link: "/product_details/92" },
//lahenga
{
  id: 93,
  name: "Elegant Lehenga 93",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹4500",
  image: lehenga93,
  link: "/product_details/93",
},
{
  id: 94,
  name: "Elegant Lehenga 94",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹4700",
  image: lehenga94,
  link: "/product_details/94",
},
{
  id: 95,
  name: "Elegant Lehenga 95",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹4900",
  image: lehenga95,
  link: "/product_details/95",
},
{
  id: 96,
  name: "Elegant Lehenga 96",
  category: "Women's",
  mrp: "N/A",
  salePrice: "₹5200",
  image: lehenga96,
  link: "/product_details/96",
},
//blouse
{ id: 97, name: "Designer Blouse 1", category: "Women's", mrp: "N/A", salePrice: "₹1200", image: blouse97, link: "/product_details/97" },
  { id: 98, name: "Designer Blouse 2", category: "Women's", mrp: "N/A", salePrice: "₹1300", image: blouse98, link: "/product_details/98" },
  { id: 99, name: "Designer Blouse 3", category: "Women's", mrp: "N/A", salePrice: "₹1400", image: blouse99, link: "/product_details/99" },
  { id: 100, name: "Designer Blouse 4", category: "Women's", mrp: "N/A", salePrice: "₹1500", image: blouse100, link: "/product_details/100" },
  { id: 101, name: "Designer Blouse 5", category: "Women's", mrp: "N/A", salePrice: "₹1600", image: blouse101, link: "/product_details/101" },
  { id: 102, name: "Designer Blouse 6", category: "Women's", mrp: "N/A", salePrice: "₹1700", image: blouse102, link: "/product_details/102" },
  { id: 103, name: "Designer Blouse 7", category: "Women's", mrp: "N/A", salePrice: "₹1800", image: blouse103, link: "/product_details/103" },
  { id: 104, name: "Designer Blouse 8", category: "Women's", mrp: "N/A", salePrice: "₹1900", image: blouse104, link: "/product_details/104" },
  { id: 105, name: "Designer Blouse 9", category: "Women's", mrp: "N/A", salePrice: "₹2000", image: blouse105, link: "/product_details/105" },
  { id: 106, name: "Designer Blouse 10", category: "Women's", mrp: "N/A", salePrice: "₹2100", image: blouse106, link: "/product_details/106" },
  { id: 107, name: "Designer Blouse 11", category: "Women's", mrp: "N/A", salePrice: "₹2200", image: blouse107, link: "/product_details/107" },
  { id: 108, name: "Designer Blouse 12", category: "Women's", mrp: "N/A", salePrice: "₹2300", image: blouse108, link: "/product_details/108" },
  { id: 109, name: "Designer Blouse 13", category: "Women's", mrp: "N/A", salePrice: "₹2400", image: blouse109, link: "/product_details/109" },
  { id: 110, name: "Designer Blouse 14", category: "Women's", mrp: "N/A", salePrice: "₹2500", image: blouse110, link: "/product_details/110" },
  { id: 111, name: "Designer Blouse 15", category: "Women's", mrp: "N/A", salePrice: "₹2600", image: blouse111, link: "/product_details/111" },
  { id: 112, name: "Designer Blouse 16", category: "Women's", mrp: "N/A", salePrice: "₹2700", image: blouse112, link: "/product_details/112" },
  { id: 113, name: "Designer Blouse 17", category: "Women's", mrp: "N/A", salePrice: "₹2800", image: blouse113, link: "/product_details/113" },
  { id: 114, name: "Designer Blouse 18", category: "Women's", mrp: "N/A", salePrice: "₹2900", image: blouse114, link: "/product_details/114" },
  { id: 115, name: "Designer Blouse 19", category: "Women's", mrp: "N/A", salePrice: "₹3000", image: blouse115, link: "/product_details/115" },
  { id: 116, name: "Designer Blouse 20", category: "Women's", mrp: "N/A", salePrice: "₹3100", image: blouse116, link: "/product_details/116" },
  { id: 117, name: "Designer Blouse 21", category: "Women's", mrp: "N/A", salePrice: "₹3200", image: blouse117, link: "/product_details/117" },
  { id: 118, name: "Designer Blouse 22", category: "Women's", mrp: "N/A", salePrice: "₹3300", image: blouse118, link: "/product_details/118" },
  { id: 119, name: "Designer Blouse 23", category: "Women's", mrp: "N/A", salePrice: "₹3400", image: blouse119, link: "/product_details/119" },
  //punjsbi
  { id: 120, name: "Punjabi Couple Set 1", category: "Couple's", mrp: "N/A", salePrice: "₹3500", image: punjabi120, link: "/product_details/120" },
  { id: 121, name: "Punjabi Couple Set 2", category: "Couple's", mrp: "N/A", salePrice: "₹3700", image: punjabi121, link: "/product_details/121" },
  { id: 122, name: "Punjabi Couple Set 3", category: "Couple's", mrp: "N/A", salePrice: "₹4000", image: punjabi122, link: "/product_details/122" },
  //lahenga and sherwani
  { id: 123, name: "Lahenga and sherwani", category: "Lahenga and sherwani", mrp: "N/A", salePrice: "₹5500", image: laherwani123, link: "/product_details/123" },
  { id: 124, name: "Lahenga and sherwani", category: "Lahenga and sherwani", mrp: "N/A", salePrice: "₹5800", image: laherwani124, link: "/product_details/124" },
  { id: 125, name: "Lahenga and sherwani", category: "Lahenga and sherwani", mrp: "N/A", salePrice: "₹6000", image: laherwani125, link: "/product_details/125" },
  { id: 126, name: "Lahenga and sherwani", category: "Lahenga and sherwani", mrp: "N/A", salePrice: "₹6300", image: laherwani126, link: "/product_details/126" },
//juti
{ id: 127, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹900", image: juti127, link: "/product_details/127" },
  { id: 128, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1000", image: juti128, link: "/product_details/128" },
  { id: 129, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1100", image: juti129, link: "/product_details/129" },
  { id: 130, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1200", image: juti130, link: "/product_details/130" },
  { id: 131, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1300", image: juti131, link: "/product_details/131" },
  { id: 132, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1400", image: juti132, link: "/product_details/132" },
  { id: 133, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1500", image: juti133, link: "/product_details/133" },
  { id: 134, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1600", image: juti134, link: "/product_details/134" },
  { id: 135, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1700", image: juti135, link: "/product_details/135" },
  { id: 136, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1800", image: juti136, link: "/product_details/136" },
  { id: 137, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹1900", image: juti137, link: "/product_details/137" },
  { id: 138, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹2000", image: juti138, link: "/product_details/138" },
  { id: 139, name: "Juti", category: "Juti", mrp: "N/A", salePrice: "₹2100", image: juti139, link: "/product_details/139" },
  //clientele
  // ===== Clientele Collection =====
{ id: 140, name: "Clientele 140", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele140, link: "/product_details/140" },
{ id: 141, name: "Clientele 141", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele141, link: "/product_details/141" },
{ id: 142, name: "Clientele 142", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele142, link: "/product_details/142" },
{ id: 143, name: "Clientele 143", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele143, link: "/product_details/143" },
{ id: 144, name: "Clientele 144", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele144, link: "/product_details/144" },
{ id: 145, name: "Clientele 145", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele145, link: "/product_details/145" },
{ id: 146, name: "Clientele 146", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele146, link: "/product_details/146" },
{ id: 147, name: "Clientele 147", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele147, link: "/product_details/147" },
{ id: 148, name: "Clientele 148", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele148, link: "/product_details/148" },
{ id: 149, name: "Clientele 149", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele149, link: "/product_details/149" },
{ id: 150, name: "Clientele 150", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele150, link: "/product_details/150" },
{ id: 151, name: "Clientele 151", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele151, link: "/product_details/151" },
{ id: 152, name: "Clientele 152", category: "Clientele", mrp: "N/A", salePrice: "₹0", image: clientevele152, link: "/product_details/152" },
  ];

  return (
    <ProductContext.Provider value={{ products}}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook (clean usage)
export const useProducts = () => useContext(ProductContext);
export default ProductProvider;
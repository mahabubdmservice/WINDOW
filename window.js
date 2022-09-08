var name = "Mizan";

function add (num1, num2){
    var result = num1 + num2;
    // window.result = num1+ num2;
    // result = num1 + num2;
    console.log("result inside", name);
        function double (num){
            return num * 2;
        }
        var total = double(result); //এখানে ফাংশনকে কল করা হয়েছে রেজাল্ট ভ্যালু দিয়ে-
        return total; 
}
// console.log('Outside result', result);
console.log("result outside", name);
var sum = add(13, 12);
console.log(sum);

console.log('Outside result', result);

// যে গুলো উইনডোর মধ্যে আছে অর্থাৎ গ্লোবালী সেট করা সেগুলো উইনডো ছাড়াই এক্সেক করা যায়
// বাকিগুলো উইনডোর . লিখতে হবে-
// উইনডো হলো জাভাস্কিপ্ট রার্নিং এনভাইরোনমেন্ট-
// যদি কোন একটা জিসিন ফাংশনেরি বাহিরে ডিক্লিয়ার করা হয় তাহলে সেটা হবে গ্লোবালি ভেরিয়েবল-

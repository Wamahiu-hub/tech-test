public class Main{

    public static void printFirst50Numbers(){
            for(int i = 1; i <= 50; i++){
                if(isDivisibleBy3(i) && isDivisibleBy5(i)){
                    System.out.println("FizzBuzz");
                }else if(isDivisibleBy3(i)){
                    System.out.println("Fizz");
                }else if(isDivisibleBy5(i)){
                    System.out.println("Buzz");
                }else{
                    System.out.println(i);
                }
            }
        }
        public static Boolean isDivisibleBy3(int number){
            return number % 3 == 0;
        }
    
        public  static Boolean isDivisibleBy5(int number){
            return number % 5 == 0;
        }
        public static void main(String[] args){
            printFirst50Numbers();
    }
}
export namespace App{
    export class Talk{
        public static GetGreeting(now : Date) : string {
            if(now.getHours() < 5) {
                return "Welcom back!";
            } else if(now.getHours() < 12) {
                return  "Good morning!";
            } else if(now.getHours() < 16) {
                return "Good afternoon!";
            } else if(now.getHours() < 22) {
                return "Good evening!";
            } else {
                return "Welcom back!";
            }
        }
    }
}
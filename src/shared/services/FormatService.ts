export class FormatService {

    public static currency() {
        return new Intl.NumberFormat("ru", {
            style: "currency",
            currency: "RUB",
            minimumFractionDigits: 1
        })
    }

    public  static date() {
        return new Intl.DateTimeFormat("ru", {
            month: "numeric",
            day: "numeric"
        })
    }
}
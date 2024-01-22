export class DateUtils {
  static formatDate(date: Date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  static getHour(date: Date) {
    return String(date.getHours()).padStart(2, "0");
  }

  static formatTime(date: Date) {
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${this.getHour(date)}:${minutes}`;
  }

  static getDayOfWeek(date: Date) {
    const dayOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return dayOfWeek[date.getDay()];
  }
}

export default class DateAndTime {
  public static getTime(
    date: string,
    alt?: boolean,
    dayFirst?: boolean
  ): string {
    if (!date) {
      return "-";
    }
    let formattingDate: string;
    let tableDate;
    if (alt) {
      formattingDate =
        date.slice(6, 10) +
        "-" +
        date.slice(3, 5) +
        "-" +
        date.slice(0, 2) +
        "T" +
        date.slice(11) +
        "Z";
      tableDate = new Date(formattingDate);
    } else {
      if (dayFirst) {
        const dayFirstDate =
          date.slice(3, 5) + "-" + date.slice(0, 2) + date.slice(5);
        tableDate = new Date(dayFirstDate);
      } else {
        tableDate = new Date(date);
      }
    }

    return (
      (tableDate.getHours() >= 12
        ? tableDate.getHours() === 12
          ? "12"
          : ("0" + (tableDate.getHours() - 12)).slice(-2)
        : tableDate.getHours() === 0
        ? "12"
        : ("0" + tableDate.getHours()).slice(-2)) +
      ":" +
      ("0" + tableDate.getMinutes()).slice(-2) +
      ":" +
      ("0" + tableDate.getSeconds()).slice(-2) +
      (tableDate.getHours() >= 12 ? " PM" : " AM")
    );
  }

  public static getDate(
    date: string,
    alt?: boolean,
    dayFirst?: boolean
  ): string {
    if (!date) {
      return "-";
    }
    let formattingDate: string;
    let tableDate;
    if (alt) {
      formattingDate =
        date.slice(6, 10) +
        "-" +
        date.slice(3, 5) +
        "-" +
        date.slice(0, 2) +
        "T" +
        date.slice(11) +
        "Z";
      tableDate = new Date(formattingDate);
    } else {
      if (dayFirst) {
        const dayFirstDate =
          date.slice(3, 5) + "-" + date.slice(0, 2) + date.slice(5);
        tableDate = new Date(dayFirstDate);
      } else {
        tableDate = new Date(date);
      }
    }

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return (
      Days[tableDate.getDay()] +
      ", " +
      tableDate.getDate() +
      " " +
      months[tableDate.getMonth()] +
      " " +
      tableDate.getFullYear()
    );
  }

  public static formatAMPM(date: Date) {
    let hours = date.getHours();
    let minutes: string | number = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
}

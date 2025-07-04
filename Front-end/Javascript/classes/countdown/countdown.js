export default class CountDown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }

  get _futureDate() {
    return new Date(this.futureDate);
  }

  get _actualDate() {
    return new Date()
  }
  get _timeStampDiff() {
    return this._futureDate.getTime() - this._actualDate.getTime();
  }

  get _days() {
    return Math.floor((this._timeStampDiff / 1000) / 60 / 60 / 24);
  }

  get _hours() {
    return Math.floor((this._timeStampDiff / 1000) / 60 / 60);
  }

  get _minutes() {
    return Math.floor((this._timeStampDiff / 1000) / 60);
  }

  get _seconds() {
    return Math.floor((this._timeStampDiff / 1000));
  }

  get _total() {
    const days = this._days;
    const hours = this._hours % 24;
    const minutes = this._minutes % 60;
    const seconds = this._seconds % 60;
    return {
      days,
      hours,
      minutes,
      seconds
    }
  }
}

console.log('teste');

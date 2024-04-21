export class Event {
  idEvent: number;
  title: string;
  dateBegin: Date; // ou string si vous utilisez des chaînes de date ISO
  dateEnd: Date; // ou string si vous utilisez des chaînes de date ISO
  location: string;
  details: string;
  description: string;
  capacity: number;
  // Ajoutez d'autres propriétés nécessaires qui correspondent à votre entité Event backend

  constructor(
    idEvent: number,
    title: string,
    dateBegin: Date,
    dateEnd: Date,
    location: string,
    details: string,
    description: string,
    capacity: number
  ) {
    this.idEvent = idEvent;
    this.title = title;
    this.dateBegin = dateBegin;
    this.dateEnd = dateEnd;
    this.location = location;
    this.details = details;
    this.description = description;
    this.capacity = capacity;
  }
}

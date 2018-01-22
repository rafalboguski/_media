export class Series {

  public image: string

  constructor(
    public name: string,
    public games: Array<Game>)
  { }
}

export class Game {

  public client: Client
  public image: string

  constructor(
    public name: string,
    public tags: Array<string>)
  { }
}

export enum Client {
  STEAM,
  ORIGIN,
  UPLAY,
  GOG,
  PIRATE
}
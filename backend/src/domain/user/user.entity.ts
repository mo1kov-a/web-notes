export class User {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _email: string,
    private readonly _password: string,
    private readonly _createdAt: Date,
    private _updatedAt: Date,
  ) {}

  static create(id: string, name: string, email: string, password: string) {
    return new User(id, name, email, password, new Date(), new Date());
  }

  static restore(
    id: string,
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    return new User(id, name, email, password, createdAt, updatedAt);
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }
}

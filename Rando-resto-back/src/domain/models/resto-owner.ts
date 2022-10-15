import { User } from '../shared/user.entity';
import { Dish } from './dish';

export class RestoOwner extends User {
  dishes: Dish[];
}

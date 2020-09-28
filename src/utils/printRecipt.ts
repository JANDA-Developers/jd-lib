import { openForPrint } from './openForPrint';
import CardRecipt from '../../src/components/recipt/CreditCardReceipt';
import { ITableInfo } from '../components/recipt/components/TableRender';

export const printRecipt = (tables: ITableInfo[]) => {
  const markUp = CardRecipt({
    tables,
  });

  openForPrint(markUp);
};

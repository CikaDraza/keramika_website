import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.20;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Lepak za plocice', 1, 650),
  createRow('Hidroizolacija', 1, 8720.00),
  createRow('Fugaona masa', 1, 675),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function PriceTable({ surfaceValue, room }) {
  const surface = surfaceValue;
  const perSurface = () => {
    if(room === 'soba') return 10;
    if(room === 'kuhinja') return 10;
    if(room === 'kupatilo') return 12;
    if(room === 'terasa-stepeniste') return 10;
  };
  const totalSurface = surface * perSurface();
console.log(perSurface());
  return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prostorija</TableCell>
              <TableCell>Povrsina</TableCell>
              <TableCell>Cena</TableCell>
              <TableCell>Ukupno</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{room.replaceAll('-', ', ').toUpperCase()}</TableCell>
              <TableCell>{surface} m2</TableCell>
              <TableCell>{perSurface()} €</TableCell>
              <TableCell>{totalSurface} €</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Materijal koji je neophodan
              </TableCell>
              <TableCell align="right">Cena</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Stavke</TableCell>
              <TableCell align="right">Kolicina</TableCell>
              <TableCell align="right">Cena</TableCell>
              <TableCell align="right">Suma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Cena</TableCell>
              <TableCell align="right">{ccyFormat(invoiceSubtotal + totalSurface)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PDV</TableCell>
              <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">{ccyFormat(invoiceTaxes + totalSurface)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Ukupno</TableCell>
              <TableCell align="right">
                {ccyFormat(invoiceTotal + totalSurface)} €
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>    
  );
}

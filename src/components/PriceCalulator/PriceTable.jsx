import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, FormHelperText, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

const InputContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flexWrap: 'nowrap',
  display: 'flex',
  borderRadius: 50,
  border: `thin solid grey`,
  backgroundColor: alpha('#fff', 0.15),
  '&:hover': {
    backgroundColor: alpha('#fff', 0.25),
  },
  marginRight: '16px',
  marginLeft: '16px',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    marginLeft: 24,
    width: '100%',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const StyledInputButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textTransform: 'capitalize',
  backgroundColor: theme.palette.primary.main,
  borderRadius: 50,
  margin: '-1px',
  padding: '.5em 0em',
  width: '250px',
  fontSize: '14px',
  '&:hover': {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

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

export default function PriceTable({ surfaceValue, room, tilePackageValue, tilePrice, adhesivePrice }) {
  const surface = surfaceValue;
  const [errors, setErrors] = React.useState({
    cupon: false
  });
  const [cuponNum, setCuponNum] = React.useState(Number);
  const [updateCupon, setUpdateCupon] = React.useState('');

  const codex = [{code: '123789', discount: .25}, {code: '789456', discount: .10}, {code: '456132', discount: .30}];

  function handleChangeCupon(e) {
    setUpdateCupon(e.target.value)
  }

  const handleSubmitCupon = async (event) => {    
      event.preventDefault();
      const formOutput = new FormData(event.currentTarget);
      const formData = {
        cuponCode: formOutput.get('cupon-code'),
      };
      if(formData.cuponCode === '') {
        setErrors({ ...errors, cupon: true });
        return;
      }
      if(codex.find(cupon => cupon.code === formData.cuponCode)) {
        const cupon = codex.filter(cupon => cupon.code === formData.cuponCode && cupon.discount);
        setCuponNum(cupon[0].discount);
        setErrors({
          ...errors,
          cupon: false
        });
        return;
      }
      if(codex.find(code => code !== formData.cuponCode)) {
        setErrors({ ...errors, cupon: true });
        return;
      }
      setCuponNum(null);
      setErrors({ 
        ...errors,
        cupon: false
      });
  };

  const rows = [
    createRow(`Pločice (${tilePackageValue}m² / paket)`, Math.ceil(surface / tilePackageValue), tilePrice),
    createRow('Lepak za pločice (5-7 kg po m², 25kg džak)', Math.ceil((surface * 7) / 25), adhesivePrice),
    createRow('Hidroizolacija (1-2 kg po m², 25kg džak)', Math.ceil((surface * 2) / 25), 24),
    createRow('Fugaona masa (0,3-0,5 kg po m², 5kg pakovanje)', Math.ceil((surface * 0.5) / 5), 6.25),
  ];
  
  
  const invoiceMaterialSubtotal = subtotal(rows); 

  const perSurface = () => {
    if(room === 'soba') return 16;
    if(room === 'kuhinja') return 16;
    if(room === 'kupatilo') return tilePrice;
    if(room === 'terasa-stepeniste') return 16;
  };

  const totalSurface = surface * perSurface();
  const invoiceWorkSubtotal = Number((totalSurface * (1 + TAX_RATE)).toFixed(2));
  const discountTotal = Number((cuponNum * (invoiceWorkSubtotal + Number(ccyFormat(invoiceMaterialSubtotal)))).toFixed(2));
  const invoiceTotal = invoiceWorkSubtotal + invoiceMaterialSubtotal - discountTotal;
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prostorija</TableCell>
              <TableCell>Površina</TableCell>
              <TableCell>Cena / m²</TableCell>
              <TableCell>Cena lepljenja</TableCell>
              <TableCell>PDV</TableCell>
              <TableCell align="right">Ukupno</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{fontWeight: 'bold'}}>{room.replaceAll('-', ', ').toUpperCase()}</TableCell>
              <TableCell>{surface} m&sup2;</TableCell>
              <TableCell>{perSurface()} €</TableCell>
              <TableCell>{totalSurface.toFixed(2)} €</TableCell>
              <TableCell>20 %</TableCell>
              <TableCell align="right">{(totalSurface * (1 + TAX_RATE)).toFixed(2)}{' €'}</TableCell>
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
              <TableCell align="right">Količina</TableCell>
              <TableCell align="right">Cena po jedinici</TableCell>
              <TableCell align="right">Suma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{row.unit}{' €'}</TableCell>
                <TableCell align="right">{ccyFormat(row.price)}{' €'}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Cena Ruke</TableCell>
              <TableCell align="right">{invoiceWorkSubtotal}{' €'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Cena Materijal</TableCell>
              <TableCell align="right">{ccyFormat(invoiceMaterialSubtotal)}{' €'}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Popust</TableCell>
              <TableCell align="right">{`${(cuponNum * 100).toFixed(0)} %`}</TableCell>
              <TableCell align="right">
                {cuponNum === 0 ? '-' : discountTotal + ' €'}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Ukupno</TableCell>
              <TableCell align="right">
                {invoiceTotal.toFixed(2)}{' €'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box component="form" onSubmit={handleSubmitCupon} sx={{width: {xs: '100%', sm: 'auto'}, '& a': {textDecoration: 'none'}, display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap', mt: 5}}>
        <InputContainer>
          <StyledInputBase
            name="cupon-code"
            id="cupon-code"
            placeholder="Coupon code"
            inputProps={{ 'aria-label': 'coupon' }}
            onChange={handleChangeCupon}
            value={updateCupon}
            error={errors.cupon}
          />
          <StyledInputButton type="submit">Primeni Kupon</StyledInputButton>
          </InputContainer>
          {
            errors.cupon && 
            <FormHelperText sx={{width: '100%', pr: 3, textAlign: 'right'}} error>Kupon kod nije validan</FormHelperText>
          }
      </Box>
    </>
  );
}

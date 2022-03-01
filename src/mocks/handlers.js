import { rest } from 'msw';

export const handlers = [
  rest.get('https://nameday.abalin.net/api/V1/getname', (req, res, ctx) => {
    return res(
      ctx.json([
        {day: 1, month: 10, name: 'Danuta, Remigiusz, Cieszysław, Dan, Danisz, Danuta, Igor, Jan, Remigiusz'},
        {day: 5, month: 10, name: 'Częstogniew, Donata, Igor, Justyn, Konstancjusz, Rabby'}
      ])
    );
  }),
];
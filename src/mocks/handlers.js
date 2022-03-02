import { rest } from 'msw';

// mock server response
export const handlers = [
  rest.get('https://nameday.abalin.net/api/V1/getname', (req, res, ctx) => {
    return res(
      ctx.json({
        0: [
          {day: 1, month: 10, name: 'Danuta, Remigiusz, Cieszysław, Dan, Danisz, Danuta, Igor, Jan, Remigiusz'},
          {day: 5, month: 10, name: 'Częstogniew, Donata, Igor, Justyn, Konstancjusz, Rabby'}
        ],
        country: "pl"
      })
    );
  })
]
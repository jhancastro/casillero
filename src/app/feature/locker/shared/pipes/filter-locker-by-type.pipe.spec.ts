import { FilterLockerByTypePipe } from './filter-locker-by-type.pipe';

describe('FilterLockerByTypePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterLockerByTypePipe();
    expect(pipe).toBeTruthy();
  });

  it('debe retornar data filtrada',() =>{
  const pipe = new FilterLockerByTypePipe();
  const data = {id:1,
          tipo:'sencillo',
          valorHora:1000,
          'cantidad':50
        }
     const result = pipe.transform([data],'tipo','sencillo');
     expect(result).toEqual([data]);
  });

  it('debe retornar vacio pues no llega casillero doble',() =>{
    const pipe = new FilterLockerByTypePipe();
    const data = {id:1,
            tipo:'sencillo',
            valorHora:1000,
            'cantidad':50
          }
       const result = pipe.transform([data],'tipo','doble');
       expect(result.length).toEqual(0);
    });

    it('debe retornar vacio pues no llega criterio',() =>{
      const pipe = new FilterLockerByTypePipe();
      const data = {id:1,
        tipo:'sencillo',
        valorHora:1000,
        'cantidad':50
      }
         const result = pipe.transform([data],'tipo',null);
         expect(result).toEqual([data]);
      });

});

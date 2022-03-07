import { by, element } from 'protractor';

export class NavbarPage {
    linkProducto = element(by.xpath('/html/body/app-root/app-home/app-navbar/nav/a[1]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }
}

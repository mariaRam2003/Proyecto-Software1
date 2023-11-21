// BUSQUEDA.js
import React, { useState } from "react";
import Header from "../components/Header";
import "../styles/Pages.css";
import BusquedaPaquete from "../components/Busquedas/BusquedaPaquete";
import BusquedaConsolidado from "../components/Busquedas/BusquedaConsolidado";
import BusquedaInvoice from "../components/Busquedas/BusquedaInvoice";

const BUSQUEDA = () => {
  return (
    <>
      <Header />
      <div className="pages">
        <div className="page-title">
          <h1>Busqueda</h1>
        </div>
        {/* Busqueda por paquetes */}
        <div className="Busqueda-Card">
          <BusquedaPaquete />
        </div>
        <div className="Busqueda-Card">
          <BusquedaConsolidado />
        </div>
        <div className="Busqueda-Card">
          <BusquedaInvoice />
        </div>
      </div>
    </>
  );
};

export default BUSQUEDA;

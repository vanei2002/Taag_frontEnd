import React, {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import {MdOutlinePersonalInjury} from "react-icons/md";
import { statusProduct } from "../../status";
import { ButtonTaag } from "../ButtonTaag/ButtonTaag";


import "./formproduct.sass";

type FormProductProps = {
    product: string;
    model: string;
    marca: string;
    nserie: string;
    heritage: string;
    invoice: string;
    nota: string;
    numberProduct: string;
    guarantee: string;
    provider: string;
    status: string;
    observation?: string;
};

type onSubmitProps = {
    onSubmit: (data: any) => void;
}

const FormProduct = () => {

    const {register, handleSubmit} = useForm();

    const onSubmit: onSubmitProps["onSubmit"] = (data: FormProductProps) => {

        statusProduct.map(item => { if(item.id == Number(data.status)) data.status = item.status})

        if(data.product && data.model && data.marca && data.nserie && data.heritage && data.invoice && data.nota && data.numberProduct && data.guarantee && data.provider && data.status){
            console.log(data);
        }
    }

    return (
        <>
            <section className="form-containerProduct">
            
                <form onSubmit={handleSubmit(onSubmit)} className="form-product">
                    <div className="container-inputsProduct">
                        <div className="form-titleProduct">
                            <MdOutlinePersonalInjury style={{color: "#000"}}/>
                            <h1>Dados do Produto</h1> 
                        </div>   
                        
                        <div className="containerInputs">
                            <div className="form-inputProduct" >
                                <label> Produto
                                    <input type="text" placeholder="Produto" {...register("product")}/>
                                </label>
                                <label>Modelo
                                    <input type="text" placeholder="Modelo" {...register("model")}/>
                                </label>
                                <label> Marca
                                <input type="text" placeholder="Marca" {...register("marca")}/>
                                </label>
                            </div>
                            
                            <div className="form-inputProduct">
                                <label> Nº de Serie
                                    <input type="text" placeholder="N serie" {...register("nserie")}/>
                                </label>
                                <label> Garantia
                                    <input type="text" placeholder="Garantia" {...register("guarantee")}/>
                                </label>
                                <label> Fornecedor
                                    <input type="text" placeholder="Fornecedor" {...register("provider")}/>
                                </label>
                            </div>

                            <div className="form-inputProduct">
                                <label> Patrimônio
                                    <input type="text" placeholder="Patrinomio" {...register("heritage")}/>
                                </label>

                                <label> Status
                                    <select  id="product" {...register("status")}>
                                        {statusProduct.map(item =>(
                                            <option key={item.id} value={item.id}>{item.status}</option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                 
                            <div className="comments">
                                <label>Observações</label>
                              <textarea cols={60} rows={50} {...register("observation")}></textarea>
                            </div>
                         
                        </div>

                    </div>

                    <div className="container-inputsProduct">
                        <div className="form-titleProduct">
                            <MdOutlinePersonalInjury style={{color: "#000"}}/>
                            <h1>Dados de compra </h1>
                        </div>
                        
                        <div className="form-inputProduct">
                                <label> Nota Fiscal
                                    <input  type="text" placeholder="Nota Fiscal" {...register("invoice")}/>
                                </label>
                                <label> Nota de Compra
                                    <input type="text" placeholder="Nota " {...register("nota")}/>
                                </label>
                                <label> Nº do Produto
                                    <input type="text" placeholder="Nº do Produto" {...register("numberProduct")}/>
                                </label>
                            </div>

                    </div>

                    <ButtonTaag typeButton="submit">Cadastrar</ButtonTaag>

                </form>

            </section>


        </>
    )
}

export default FormProduct;
package com.desafio.demo.api.resource;

import com.desafio.demo.api.dto.EmpresaDTO;
import com.desafio.demo.api.service.EmpresaService;
import com.desafio.demo.model.entity.Empresa;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/empresa")
public class EmpresaController {

    EmpresaService empresaService;

    @PostMapping
    public EmpresaDTO save(EmpresaDTO empresaDTO) {

        Empresa empresa = Empresa.builder().build();

        return empresaService.save(empresaDTO);

    }


}

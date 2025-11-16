---
title: "Computación en la nube, Big Data y Power BI"
slug: "computacion-en-la-nube"
module: "computacion-en-la-nube"
moduleTitle: "Computación en la nube, Big Data y Power BI"
order: 3
summary: "Introducción a la computación en la nube, los modelos de servicio y despliegue, el concepto de Big Data y el uso de Power BI como herramienta de análisis y visualización."
tags: ["cloud computing", "computación en la nube", "Big Data", "Power BI", "analítica de datos", "BI"]
videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID_POR_DEFINIR"
---


En este módulo se conectan tres piezas clave del entorno tecnológico actual:

- La **computación en la nube (Cloud Computing)**, que ofrece infraestructura y servicios tecnológicos a través de Internet.
- El **Big Data**, que describe el manejo de grandes volúmenes de datos variados y veloces.
- **Power BI**, una herramienta de inteligencia de negocios (BI) que permite analizar y visualizar datos.

Estas tecnologías son fundamentales para entender cómo las organizaciones aprovechan la **globalización** y la **economía digital** para tomar mejores decisiones y diseñar nuevos modelos de negocio.

---

## 1. Computación en la nube (Cloud Computing)

La **computación en la nube** es un modelo que permite acceder, a través de Internet, a un conjunto compartido de recursos informáticos (servidores, almacenamiento, bases de datos, redes, aplicaciones, etc.), que pueden **aprovisionarse y liberarse rápidamente** con un mínimo esfuerzo de gestión por parte del usuario.

En lugar de comprar y mantener infraestructura propia, las organizaciones **“alquilan” recursos en la nube** según sus necesidades.

### 1.1 Características esenciales

En el enfoque clásico de cloud computing se destacan varias características:

- **Autoservicio bajo demanda**  
  El usuario puede crear, configurar y eliminar recursos (máquinas virtuales, bases de datos, servicios) sin intervención manual del proveedor.

- **Acceso ubicuo a la red**  
  Los servicios son accesibles desde cualquier lugar con conexión a Internet y dispositivos estándar (PC, portátil, tablet, móvil).

- **Pool de recursos compartidos**  
  Los recursos físicos (servidores, almacenamiento) se agrupan para atender a múltiples clientes de forma dinámica.

- **Elasticidad rápida**  
  Es posible escalar hacia arriba o hacia abajo (más o menos recursos) de manera flexible, casi en tiempo real.

- **Servicio medido (pago por uso)**  
  El consumo se monitoriza y se cobra según el uso: por ejemplo, por hora de CPU, gigabytes almacenados, usuarios activos, etc.

Estas características permiten a las organizaciones adaptarse mejor a demandas variables sin grandes inversiones iniciales.

---

### 1.2 Modelos de servicio: IaaS, PaaS y SaaS

En las presentaciones se distinguen tres niveles principales de servicio en la nube:

#### a) IaaS (Infrastructure as a Service)

- Ofrece **infraestructura básica**:
  - Servidores virtuales,
  - Almacenamiento,
  - Redes,
  - Sistemas operativos básicos.
- El cliente se encarga de:
  - Instalar y configurar el software,
  - Gestionar la seguridad a nivel de sistema operativo,
  - Administrar aplicaciones.

Es similar a “alquilar una máquina” en un centro de datos remoto.

#### b) PaaS (Platform as a Service)

- Proporciona una **plataforma completa** para desarrollar, probar y desplegar aplicaciones:
  - Entorno de ejecución,
  - Servidor de aplicaciones,
  - Bases de datos gestionadas,
  - Herramientas de desarrollo e integración.

El desarrollador se enfoca en el **código y la lógica de negocio**, mientras el proveedor se encarga de la infraestructura subyacente.

#### c) SaaS (Software as a Service)

- Ofrece aplicaciones **listas para usar** a través de Internet:
  - Correo electrónico,
  - Gestores de proyectos,
  - CRM,
  - Herramientas ofimáticas, etc.
- El usuario solo necesita un navegador (u app) y credenciales; no gestiona servidores ni instalaciones.

SaaS es el modelo más visible para usuarios finales, especialmente en el contexto de la globalización y el trabajo remoto.

---

### 1.3 Modelos de despliegue

Además de los modelos de servicio, se distinguen **tipos de nube** según quién la utiliza y quién la administra:

#### a) Nube pública

- Infraestructura propiedad de un proveedor externo que ofrece servicios a múltiples organizaciones (clientes).
- Ejemplos típicos: grandes proveedores comerciales.
- Ventajas:
  - Escalabilidad,
  - Pago por uso,
  - Menor inversión inicial.
- Desventajas:
  - Menor control directo sobre la infraestructura,
  - Preocupaciones por seguridad y cumplimiento normativo.

#### b) Nube privada

- Infraestructura de cloud utilizada **exclusivamente** por una organización.
- Puede estar en sus propias instalaciones o gestionada por un tercero.
- Ventajas:
  - Mayor control sobre seguridad, configuración y cumplimiento.
- Desventajas:
  - Mayor inversión y responsabilidad de gestión.

#### c) Nube híbrida

- Combina nubes **públicas y privadas**, permitiendo mover cargas de trabajo entre ambas.
- Permite, por ejemplo:
  - Mantener datos sensibles en nube privada,
  - Usar nube pública para picos de demanda o servicios específicos.

#### d) Nube comunitaria

- Infraestructura compartida por varias organizaciones con intereses o requisitos similares (por ejemplo, sector público, salud, educación), que comparten costes y gobernanza.

---

### 1.4 Ventajas y desafíos de la computación en la nube

**Ventajas:**

- Reducción de la **inversión inicial** en hardware y centros de datos.
- **Escalabilidad** y flexibilidad ante picos de demanda.
- Posibilidad de centrarse en el **core del negocio**, delegando la gestión de infraestructura.
- Actualizaciones y mejoras tecnológicas más rápidas.

**Desafíos y riesgos:**

- Preocupaciones por **seguridad y privacidad** de los datos.
- Dependencia del proveedor (riesgo de **“vendor lock-in”**).
- Problemas de **latencia** o disponibilidad si la conexión a Internet es inestable.
- Requisitos de cumplimiento de **regulaciones** (protección de datos, normativa sectorial).

En el contexto de la globalización y la economía digital, la nube es un **enabler** clave para que tanto grandes empresas como PYMEs accedan a tecnología avanzada sin grandes inversiones.

---

## 2. Big Data

El término **Big Data** se refiere a conjuntos de datos tan grandes, veloces o complejos que resultan difíciles de gestionar con herramientas tradicionales.

Las presentaciones suelen enfocarse en las conocidas **“V” del Big Data**, que describen sus características.

### 2.1 Las “V” del Big Data

Aunque hay variantes, es común hablar de al menos cinco:

1. **Volumen**  
   - Cantidades masivas de datos (gigabytes, terabytes, petabytes).
   - Ejemplos: registros de sensores, clics en sitios web, transacciones financieras, logs de aplicaciones.

2. **Velocidad**  
   - Datos que se generan y deben procesarse en **tiempo real** o casi real.
   - Ejemplos: cotizaciones bursátiles, monitoreo de redes, telemetría de dispositivos IoT.

3. **Variedad**  
   - Distintos tipos de datos:
     - Estructurados (tablas),
     - Semiestructurados (JSON, XML),
     - No estructurados (textos, imágenes, videos, audio).

4. **Veracidad**  
   - Calidad y confiabilidad de los datos:
     - Datos incompletos, ruidosos, duplicados o contradictorios.
   - Es necesario limpiar y validar los datos para que el análisis sea útil.

5. **Valor**  
   - Capacidad de extraer **conocimiento útil** para la toma de decisiones.
   - El objetivo no es acumular datos, sino generar:
     - Mejores decisiones,
     - Nuevos productos y servicios,
     - Ventajas competitivas.

---

### 2.2 Fuentes y usos de Big Data

**Fuentes habituales:**

- Redes sociales y plataformas digitales.
- Sensores y dispositivos IoT (Internet of Things).
- Sistemas de gestión empresarial (ERP, CRM, sistemas de facturación).
- Registros de salud, educación, transporte, energía.
- Datos abiertos de gobiernos y organismos internacionales.

**Algunos casos de uso:**

- **Marketing y experiencia del cliente**  
  Segmentación avanzada, recomendaciones de productos, análisis de sentimiento.

- **Finanzas**  
  Detección de fraude, análisis de riesgo, trading algorítmico.

- **Industria y logística**  
  Mantenimiento predictivo, optimización de rutas, gestión de inventarios.

- **Sector público y medio ambiente**  
  Monitoreo de calidad del aire, gestión de recursos hídricos, análisis de desastres naturales.

En el contexto de la globalización, el Big Data permite analizar fenómenos a gran escala, detectar patrones globales y diseñar políticas o estrategias más informadas.

---

### 2.3 Big Data y computación en la nube

La **nube** y el **Big Data** están estrechamente relacionados:

- La nube ofrece:
  - **Almacenamiento escalable** para enormes volúmenes de datos.
  - **Capacidad de cómputo** elástica para análisis intensivos.
  - Servicios administrados de bases de datos, data lakes, motores de procesamiento, etc.

- El Big Data se beneficia de:
  - No tener que montar infraestructura propia para almacenar y procesar grandes cantidades de información.
  - Poder escalar dinámicamente según las necesidades de análisis.

En la práctica, muchos proyectos de Big Data se implementan sobre plataformas en la nube.

---

## 3. Power BI

**Power BI** es una herramienta de **inteligencia de negocios (Business Intelligence)** desarrollada por Microsoft. Permite:

- Conectar distintas fuentes de datos,
- Transformar y limpiar información,
- Modelarla (relaciones, medidas),
- Crear informes y cuadros de mando interactivos,
- Compartir resultados con otros usuarios.

En el curso se usan materiales que introducen Power BI como herramienta de visualización y análisis, complementando los temas de Big Data y nube.

---

### 3.1 Componentes principales de Power BI

De forma simplificada, Power BI está formado por varios componentes:

- **Power BI Desktop**  
  Aplicación de escritorio para:
  - Conectar fuentes de datos,
  - Transformar datos,
  - Construir el modelo,
  - Diseñar informes.

- **Power BI Service (en la nube)**  
  Servicio en línea donde:
  - Se publican los informes,
  - Se crean dashboards,
  - Se comparten visualizaciones con otros usuarios.

- **Power BI Mobile**  
  Aplicaciones para móviles y tablets para visualizar reportes y paneles desde cualquier lugar.

En las diapositivas se enfatiza el uso de **Power BI Desktop** como punto de partida.

---

### 3.2 Descarga e instalación de Power BI Desktop

El material del curso proporciona el enlace oficial de descarga:

- **Enlace de descarga:**  
  `https://powerbi.microsoft.com/es-es/desktop/`

Pasos típicos:

1. Ingresar al enlace oficial de Power BI Desktop.
2. Descargar el instalador correspondiente.
3. Ejecutar el instalador y seguir el asistente de instalación.
4. Iniciar **Power BI Desktop**.
5. (Opcional) Iniciar sesión con una cuenta de Microsoft (puede ser institucional o personal) para habilitar todas las funciones de publicación.

---

### 3.3 Flujo básico de trabajo en Power BI

Aunque Power BI tiene muchas funciones, el flujo básico que se trabaja en el curso se puede resumir en cinco pasos:

#### 1) Obtener datos

- Conectar a distintas fuentes:
  - Archivos (Excel, CSV, TXT),
  - Bases de datos (SQL Server, MySQL, PostgreSQL, etc.),
  - Servicios en la nube,
  - Datos web.

#### 2) Transformar y limpiar datos (Power Query)

- Eliminar columnas innecesarias,
- Filtrar filas,
- Unir o combinar tablas,
- Cambiar tipos de datos,
- Crear columnas calculadas simples (por ejemplo, concatenar campos).

Esta etapa es clave para asegurar la **calidad** de la información.

#### 3) Modelar datos

- Definir **relaciones** entre tablas (por ejemplo, ventas ↔ clientes ↔ productos).
- Crear **medidas** con DAX (Data Analysis Expressions) para:
  - Sumas y promedios,
  - Porcentajes,
  - Acumulados,
  - Indicadores clave (KPI).

El modelo de datos bien diseñado facilita la creación de informes flexibles.

#### 4) Crear visualizaciones

- Construir gráficos y elementos visuales:
  - Barras, líneas, áreas,
  - Tablas y matrices,
  - Mapas,
  - Tarjetas de indicadores,
  - Segmentadores (slicers).
- Aplicar formatos, colores, títulos y leyendas para mejorar la legibilidad.

#### 5) Publicar y compartir

- Publicar el informe en el **servicio de Power BI** (si se dispone de cuenta).
- Crear **dashboards** al combinar visualizaciones clave.
- Compartir con otros usuarios, configurando permisos de acceso.

---

### 3.4 Power BI en el contexto de la nube y Big Data

Power BI se integra naturalmente con la nube y el Big Data:

- Puede conectarse a:
  - Bases de datos y data warehouses en la nube,
  - Servicios de análisis,
  - Archivos almacenados en servicios en línea.
- Permite explotar los datos que empresas y organizaciones ya almacenan en la nube, presentándolos de manera **visual e interactiva** para apoyar la toma de decisiones.

En un entorno globalizado y digital:

- La nube facilita el **almacenamiento y procesamiento** de datos.
- El Big Data describe el **volumen, velocidad y variedad** de esos datos.
- Herramientas como Power BI ayudan a **comprender y comunicar** lo que dicen los datos.

---

## 4. Conclusiones del módulo

En este módulo se han conectado tres conceptos fundamentales:

1. **Computación en la nube**  
   - Proporciona infraestructura y servicios de TI de forma flexible, escalable y bajo demanda.

2. **Big Data**  
   - Describe los datos masivos y complejos que se generan en la economía digital y que requieren nuevas herramientas de almacenamiento y análisis.

3. **Power BI**  
   - Es una herramienta práctica para transformar esos datos en **información visual**, entendible y útil para la toma de decisiones.

En conjunto, estos elementos forman una parte esencial de la **plataforma tecnológica** sobre la que operan muchos modelos de negocio contemporáneos, y se relacionan directamente con los temas de **globalización** y **economía digital** vistos en módulos anteriores.
